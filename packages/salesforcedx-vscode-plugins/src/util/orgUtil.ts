/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AuthFields, AuthInfo } from '@salesforce/core';
import { OrgAuthInfo, workspaceUtils } from '../util';

export async function getAuthFieldsFor(username: string): Promise<AuthFields> {
  const authInfo: AuthInfo = await AuthInfo.create({
    username
  });

  return authInfo.getFields();
}

export async function getDefaultDevHubUsernameOrAlias(): Promise<
  string | undefined
> {
  if (workspaceUtils.hasRootWorkspace()) {
    return OrgAuthInfo.getDefaultDevHubUsernameOrAlias(false);
  }
}
