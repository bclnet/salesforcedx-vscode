export declare enum OrgType {
    SourceTracked = 0,
    NonSourceTracked = 1
}
/**
 * @description determines whether the default org is source-tracked or not.
 * During dev it was observed that there were some potential issues with other options
 * (org.isScratch, org.tracksSource) related to cache-ing and a newly created
 * Scratch Org would sometimes return false.  Using org.supportsSourceTracking()
 * because it has been the most consistently accurate solution here.
 * @returns OrgType (SourceTracked or NonSourceTracked) of the current default org
 */
export declare function getWorkspaceOrgType(): Promise<OrgType>;
export declare function setWorkspaceOrgTypeWithOrgType(orgType: OrgType): void;
export declare function setupWorkspaceOrgType(defaultUsernameOrAlias?: string): Promise<void>;
export declare function getDefaultUsernameOrAlias(): Promise<string | undefined>;
