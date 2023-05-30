/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as vscode from 'vscode';
export interface CommandExecution { x: any; }
export interface Observable<T> { x: any; }

export interface ChannelService {
  streamCommandOutput(execution: CommandExecution): any;
  streamCommandStartStop(execution: CommandExecution): any;
  showCommandWithTimestamp(commandName: string): any;
  showChannelOutput(): any;
  appendLine(text: string): void;
  clear(): void;
}

export interface NotificationService {
  showErrorMessage(message: string, ...items: string[]): Thenable<string | undefined>;
  showInformationMessage(message: string, ...items: string[]): Thenable<string | undefined>;
  showWarningMessage(message: string, ...items: string[]): Thenable<string | undefined>;
  showWarningModal(message: string, ...items: string[]): Thenable<string | undefined>;
  reportCommandExecutionStatus(execution: CommandExecution, cancellationToken?: vscode.CancellationToken): void;
  showFailedExecution(executionName: string): void;
  showSuccessfulExecution(executionName: string): void;
  reportExecutionError(executionName: string, observable: Observable<Error | undefined>): void;
}
