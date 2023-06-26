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
  channel_starting_message: '開始しています: ',
  channel_end_with_exit_code: 'が終了コード %s で終了しました。',
  channel_end_with_sfdx_not_found:
    'Salesforce CLI がインストールされていません。https://developer.salesforce.com/tools/sfdxcli からインストールしてください。',
  channel_end_with_error: 'がエラーで終了しました。%s',
  channel_end: 'が終了しました。',

  progress_notification_text: '%s を実行しています。',

  notification_successful_execution_text: '%s が正常に実行されました。',
  notification_canceled_execution_text: '%s がキャンセルされました。',
  notification_unsuccessful_execution_text: '%s が失敗しました。',
  notification_show_button_text: '表示',
  notification_show_in_status_bar_button_text: 'ステータスバーだけに表示',
  notification_make_default_dev: 'Dev Hub 組織を認証',

  task_view_running_message: '[実行しています] %s',

  status_bar_text: `$(x) %s`,
  status_bar_tooltip: 'クリックしてコマンドをキャンセル',

  demo_mode_status_text: `$(gist-secret) SFDX DEMO`,
  demo_mode_status_tooltip: 'VS Code のSalesforce 拡張機能をデモモードで実行しています。本番環境に接続するときに確認を求められます。',
  demo_mode_prompt: 'デモモードまたは共有マシンで、ビジネスまたは本番組織を認証することは推奨されません。認証を続ける場合、組織を使用した後、必ず "SFDX: すべての認証済み組織からログアウト" を実行してください。',

  force_apex_debug_log_status_bar_text: '$(file-text) 詳細なログを記録しています。%s まで。',
  force_apex_debug_log_status_bar_hover_text: 'Apex および Visualforce のデバッグログをログレベル %s で書き込んでいます。%s, %s まで。',

  sfdx_cli_not_found: 'Salesforce CLI がインストールされていません。[%s](%s) からインストールしてください。',
  error_no_default_username: 'デフォルトの組織が設定されていません。"SFDX: デフォルトのスクラッチ組織を作成" または "SFDX: 組織を認証" を実行し組織を設定してください。',
  error_no_default_devhubusername: 'デフォルトの Dev Hub 組織が設定されていません。"SFDX: Dev Hub 組織を認証" を実行て組織を設定してください。',
  warning_using_global_username: 'ローカルのプロジェクト設定にデフォルトのユーザ名が見つかりませんでした。グローバルのデフォルトユーザ名を使用します。"SFDX: 組織を認証" を実行して ローカルのプロジェクト設定にユーザ名を設定してください。'
};
