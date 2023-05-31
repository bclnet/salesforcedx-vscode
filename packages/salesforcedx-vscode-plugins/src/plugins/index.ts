/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Config, Interfaces } from '@oclif/core';
import { ensureJsonMap } from '@salesforce/ts-types';
import * as fs from 'fs';
import * as path from 'path';
import { parse as uuidParse, stringify as uuidStringify } from 'uuid';
import * as vscode from 'vscode';
import { ROOT_DIR } from '../constants';

function Object_merge(target: object, source: any) {
  if (!source) return;
  for (const key in source) {
    if (!source.hasOwnProperty(key)) continue;
    const s = source[key];
    if (Array.isArray(s)) {
      if (!target[key]) target[key] = [];
      target[key] = [...target[key], ...s];
    } else if (typeof s === 'object') {
      if (!target[key]) target[key] = {};
      Object_merge(target[key], s);
    } else target[key] = s;
  }
}

function loadModule(filePath: string): any { return require(filePath); }
function readJson(filePath: string): any { return JSON.parse(fs.readFileSync(filePath, 'utf8')); }

class UuidDigest {
  private readonly digest: Uint8Array;

  constructor(private seed: number) {
    this.digest = new Uint8Array(16);
  }

  public add(uuid: string): void {
    const arr = uuidParse(uuid); const s = this.seed; const d = this.digest;
    for (let i = 0; i < 16; ++i) d[i] = (s * arr[i] ^ d[i]) % 0x100;
  }

  public toString(): string {
    const d = this.digest;
    d[6] = Math.abs((d[6] - 0x10) % 0x50) + 0x10;
    d[8] = Math.abs((d[8] - 0x80) % 0x50) + 0x80;
    return uuidStringify(d);
  }
}

interface Plugin {
  name: string;
  root: string;
  verId: string;
  activate: (context: vscode.ExtensionContext) => Promise<void>;
  deactivate: () => Thenable<void> | undefined;
}

export default class Plugins {
  private static packagePath = path.join(ROOT_DIR, './package.json');
  private static instance: Plugins;
  private readonly debug: any;
  private readonly plugins: Plugin[];

  public static async getInstance() {
    if (!Plugins.instance) {
      const rootVerId = Plugins.ensurePackage(Plugins.packagePath);
      const config = await Config.load(module.filename || __dirname);
      Plugins.instance = new Plugins(config, rootVerId);
    }
    return Plugins.instance;
  }

  constructor(config: Interfaces.Config, rootVerId: string) {
    this.debug = require('debug')('@oclif/plugins');
    const digest = new UuidDigest(config.plugins.length);
    this.plugins = config.plugins.filter(s => s.name !== 'sfdx' && s.name !== 'sf').map(s => {
      this.debug(`Loading plugin: ${s.name}`);
      const plugin: Plugin = {
        name: s.name,
        root: s.root,
        verId: undefined,
        activate: undefined,
        deactivate: undefined
      };
      try {
        const verId = ensureJsonMap(readJson(path.join(s.root, 'package.json'))).verId as string;
        if (verId) digest.add(verId);
        const code = loadModule(s.root);
        plugin.verId = verId;
        plugin.activate = code.activate;
        plugin.deactivate = code.deactivate;
      } catch (error: any) { /* console.log(error); */ }
      return plugin;
    });
    const digestId = digest.toString();
    if (rootVerId !== digestId) {
      this.buildPackage(Plugins.packagePath, digestId);
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

  private static ensurePackage(jsonPath: string): string {
    if (fs.existsSync(jsonPath)) {
      return ensureJsonMap(readJson(jsonPath)).verId as string;
    }
    const fse = require('fs-extra');
    fse.outputJSONSync(jsonPath, {
      name: 'sfdx',
      verId: '',
      contributes: {}
    }, { spaces: 2 });
    return '';
  }

  private buildPackage(jsonPath: string, verId: string): void {
    const jsonRoot = jsonPath.substring(0, jsonPath.length - 6);

    // build files
    let nls = {};
    let nlsJa = {};
    const contributes = {};

    // scan plugins
    this.plugins.forEach(s => {
      const nlsPath = path.join(s.root, 'package.nls.json');
      const nlsJaPath = path.join(s.root, 'package.nls.ja.json');
      const packagePath = path.join(s.root, 'package.json');
      if (fs.existsSync(nlsPath)) nls = { ...nls, ...ensureJsonMap(readJson(nlsPath)) };
      if (fs.existsSync(nlsJaPath)) nlsJa = { ...nlsJa, ...ensureJsonMap(readJson(nlsJaPath)) };
      const obj = readJson(packagePath).contributes;
      Object_merge(contributes, obj);
    });

    // write files
    const fse = require('fs-extra');
    fse.outputJSONSync(jsonRoot + '.nls.json', nls, { spaces: 2 });
    fse.outputJSONSync(jsonRoot + '.nls.ja.json', nlsJa, { spaces: 2 });
    fse.outputJSONSync(jsonPath, {
      name: 'sfdx',
      verId,
      contributes
    }, { spaces: 2 });
  }
}
