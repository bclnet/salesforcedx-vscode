import { AuthFields } from '@salesforce/core';
import { OrgList } from '../orgPicker';
export declare function setUpOrgExpirationWatcher(orgList: OrgList): Promise<void>;
export declare function checkForExpiredOrgs(orgList: OrgList): Promise<void>;
export declare function getAuthFieldsFor(username: string): Promise<AuthFields>;
export declare function getDefaultDevHubUsernameOrAlias(): Promise<string | undefined>;
