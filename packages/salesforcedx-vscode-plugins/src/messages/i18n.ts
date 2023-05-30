/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Conventions:
 * _message: is for unformatted text that will be shown as-is to
 * the user.
 * _text: is for text that will appear in the UI, possibly with
 * decorations, e.g., $(x) uses the https://octicons.github.com/ and should not
 * be localized
 *
 * If omitted, we will assume _message.
 */
export const messages = {
  channel_name: 'Salesforce CLI',

  progress_notification_text: 'Running %s',

  notification_successful_execution_text: '%s successfully ran',
  notification_canceled_execution_text: '%s was canceled',
  notification_unsuccessful_execution_text: '%s failed to run',
  notification_show_button_text: 'Show',
  notification_show_in_status_bar_button_text: 'Show Only in Status Bar',
  notification_make_default_dev: 'Authorize a Dev Hub',

  status_bar_open_org_tooltip: 'Open Org',

  demo_mode_status_text: `$(gist-secret) SFDX DEMO`,
  demo_mode_status_tooltip: 'You are running Salesforce Extensions for VS Code in demo mode. You will be prompted for confirmation when connecting to production orgs.',
  demo_mode_prompt: 'Authorizing a business or production org is not recommended on a demo or shared machine. If you continue with the authentication, be sure to run "SFDX: Log Out from All Authorized Orgs" when you\'re done using this org.',

  force_apex_debug_log_status_bar_text: '$(file-text) Recording detailed logs until %s',
  force_apex_debug_log_status_bar_hover_text: 'Writing debug logs for Apex and Visualforce at the %s log level until %s on %s',

  sfdx_cli_not_found: 'Salesforce CLI is not installed. Install it from [%s](%s)',
  error_no_default_username: 'No default org is set. Run "SFDX: Create a Default Scratch Org" or "SFDX: Authorize an Org" to set one.',
  error_no_default_devhubusername: 'No default Dev Hub is set. Run "SFDX: Authorize a Dev Hub" to set one.',
  warning_using_global_username: 'No default username found in the local project config; using the global default username. Run "SFDX: Authorize an Org" to set the username for the local project config.'
};
