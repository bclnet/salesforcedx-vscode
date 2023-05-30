import { Connection } from '@salesforce/core';
import { ConfigSource } from '@salesforce/salesforcedx-utils-vscode';
export declare class OrgAuthInfo {
    static getDevHubUsername(): Promise<string>;
    static getDefaultUsernameOrAlias(enableWarning: boolean): Promise<string | undefined>;
    static getDefaultDevHubUsernameOrAlias(enableWarning: boolean, configSource?: ConfigSource.Global | ConfigSource.Local): Promise<string | undefined>;
    static getUsername(usernameOrAlias: string): Promise<string>;
    static isAScratchOrg(username: string): Promise<boolean>;
    static getConnection(usernameOrAlias?: string): Promise<Connection>;
    static getOrgApiVersion(): Promise<string | undefined>;
}
