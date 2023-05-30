import { AuthFields, OrgAuthorization } from '@salesforce/core';
import { CancelResponse, ContinueResponse } from '@salesforce/salesforcedx-utils-vscode';
import * as vscode from 'vscode';
export declare class OrgList implements vscode.Disposable {
    private statusBarItem;
    constructor();
    private displayDefaultUsername;
    getOrgAuthorizations(): Promise<OrgAuthorization[]>;
    getAuthFieldsFor(username: string): Promise<AuthFields>;
    filterAuthInfo(orgAuthorizations: OrgAuthorization[]): Promise<string[]>;
    updateOrgList(): Promise<string[]>;
    setDefaultOrg(): Promise<CancelResponse | ContinueResponse<{}>>;
    dispose(): void;
}
