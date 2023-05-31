/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as vscode from 'vscode';
import { telemetryService } from './telemetry';
import Plugins from './plugins';
import { EXTENSION_NAME } from './constants';

export { channelService } from './channels';
export { WorkspaceContext, workspaceContextUtils } from './context';
export { decorators, disposeTraceFlagExpiration, showDemoMode } from './decorators';
export { notificationService, ProgressNotification } from './notifications';
export { sfdxCoreSettings } from './settings';
export {
    OrgAuthInfo,
    disableCLITelemetry,
    isCLIInstalled,
    isCLITelemetryAllowed,
    isSFDXContainerMode,
    showCLINotInstalledMessage,
    workspaceUtils,
    getAuthFieldsFor,
    getDefaultDevHubUsernameOrAlias
} from './util';

let plugins: Plugins;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
    const extensionHRStart = process.hrtime();

    // Initialize telemetry service
    const { aiKey, version } = context.extension.packageJSON;
    await telemetryService.initializeService(
        context,
        EXTENSION_NAME,
        aiKey,
        version
    );

    // Plugins
    plugins = await Plugins.getInstance();
    await plugins.activate(context);

    // send activationEvent
    telemetryService.sendExtensionActivationEvent(extensionHRStart);
}

export function deactivate(): Thenable<void> | undefined {
    plugins.deactivate();
    telemetryService.sendExtensionDeactivationEvent();
    return;
}
