/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as vscode from 'vscode';
import { Config, Interfaces } from '@oclif/core';
import { ensureJsonMap } from '@salesforce/ts-types';
import * as fs from 'fs';
import * as path from 'path';
// import { v4 as uuidv4 } from 'uuid';
import { ROOT_DIR } from '../constants';

function Object_merge(target: object, source: any) {
  if (!source) return;
  for (const key in source) {
    const s = source[key];
    if (Array.isArray(s)) {
      if (!target[key]) target[key] = [];
      target[key] = [...target[key], ...s];
    }
    else if (typeof s === 'object') {
      if (!target[key]) target[key] = {};
      Object_merge(target[key], s);
    }
    else target[key] = s;
  }
}

function readFile(filePath: string): any { return require(filePath); }
function readJsonFile(filePath: string): any { return JSON.parse(fs.readFileSync(filePath, 'utf8')); }

interface Plugin {
  name: string;
  root: string;
  activate: Function;
  deactivate: Function;
}

export default class Plugins {
  private static packagePath = path.join(ROOT_DIR, '../package.json');
  private static instance: Plugins;
  private readonly plugins: Plugin[];
  private readonly debug: any;

  public static async getInstance() {
    if (!Plugins.instance) {
      Plugins.ensurePackage(Plugins.packagePath);
      const config = await Config.load(module.filename || __dirname);
      Plugins.instance = new Plugins(config);
    }
    return Plugins.instance;
  }

  constructor(config: Interfaces.Config) {
    this.plugins = config.plugins.filter(s => s.name !== 'sfdx' && s.name !== 'sf').map(s => {
      console.log(`Loading plugin: ${s.name}`);
      const plugin: Plugin = {
        name: s.name,
        root: s.root,
        activate: undefined,
        deactivate: undefined
      };
      try {
        const code = readFile(s.root);
        plugin.activate = code.activate;
        plugin.deactivate = code.deactivate;
      } catch (error: any) {
        //console.log(error);
      }
      return plugin;
    });
    console.log(this.plugins);
    this.debug = require('debug')('@oclif/plugins');
    const rootVerId = ensureJsonMap(readJsonFile(path.join(config.root, 'package.json'))).verId as string;
    const thisVerId = this.getVerId();
    if (rootVerId !== thisVerId) {
      console.log('verId', rootVerId, thisVerId);
      this.buildPackage(Plugins.packagePath);
    }
  }

  public async activate(context: vscode.ExtensionContext) {
    this.plugins.filter(s => s.activate).forEach(async s => {
      await s.activate(context);
    });
  }

  public deactivate() {
    this.plugins.filter(s => s.deactivate).forEach(s => {
      s.deactivate();
    });
  }

  private getVerId(): string {
    return 'new';
  }

  private static ensurePackage(jsonPath: string): void {
    if (fs.existsSync(jsonPath)) return;
    const fse = require('fs-extra');
    fse.outputJSONSync(jsonPath, {
      "name": "sfdx",
      "contributes": {}
    }, { spaces: 2 });
  }

  private buildPackage(jsonPath: string): void {
    const jsonRoot = jsonPath.substring(0, jsonPath.length - 6);

    // build files
    let nls = {};
    let nlsJa = {};
    const contributes = {};

    this.plugins.forEach(s => {
      const nlsPath = path.join(s.root, 'package.nls.json');
      const nlsJaPath = path.join(s.root, 'package.nls.ja.json');
      const packagePath = path.join(s.root, 'package.json');
      if (fs.existsSync(nlsPath)) nls = { ...nls, ...ensureJsonMap(readFile(nlsPath)) };
      if (fs.existsSync(nlsJaPath)) nlsJa = { ...nlsJa, ...ensureJsonMap(readFile(nlsJaPath)) };
      const obj = readJsonFile(packagePath).contributes;
      Object_merge(contributes, obj);
    });

    // write files
    const fse = require('fs-extra');
    fse.outputJSONSync(jsonRoot + '.nls.json', nls, { spaces: 2 });
    fse.outputJSONSync(jsonRoot + '.nls.ja.json', nlsJa, { spaces: 2 });
    fse.outputJSONSync(jsonPath, {
      "name": "sfdx",
      "contributes": contributes
    }, { spaces: 2 });
  }
}
