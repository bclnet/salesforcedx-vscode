import { Connection } from '@salesforce/core';
import { OrgUserInfo } from '@salesforce/salesforcedx-utils-vscode';
import * as vscode from 'vscode';
/**
 * Manages the context of a workspace during a session with an open SFDX project.
 */
export declare class WorkspaceContext {
    protected static instance?: WorkspaceContext;
    readonly onOrgChange: vscode.Event<OrgUserInfo>;
    protected constructor();
    initialize(extensionContext: vscode.ExtensionContext): Promise<void>;
    static getInstance(forceNew?: boolean): WorkspaceContext;
    getConnection(): Promise<Connection>;
    protected handleCliConfigChange(orgInfo: OrgUserInfo): Promise<void>;
    get username(): string | undefined;
    get alias(): string | undefined;
}
