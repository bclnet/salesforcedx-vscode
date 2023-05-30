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
export declare const messages: {
    channel_name: string;
    channel_starting_message: string;
    channel_end_with_exit_code: string;
    channel_end_with_sfdx_not_found: string;
    channel_end_with_error: string;
    channel_end: string;
    progress_notification_text: string;
    notification_successful_execution_text: string;
    notification_canceled_execution_text: string;
    notification_unsuccessful_execution_text: string;
    notification_show_button_text: string;
    notification_show_in_status_bar_button_text: string;
    notification_make_default_dev: string;
    task_view_running_message: string;
    status_bar_text: string;
    status_bar_tooltip: string;
    status_bar_open_org_tooltip: string;
    status_bar_org_picker_tooltip: string;
    force_auth_web_login_authorize_dev_hub_text: string;
    force_auth_web_login_authorize_org_text: string;
    force_auth_access_token_authorize_org_text: string;
    force_auth_access_token_login_bad_oauth_token_message: string;
    force_auth_web_login_device_code_parse_error: string;
    force_auth_device_login_enter_code: string;
    action_required: string;
    parameter_directory_strict_not_available: string;
    parameter_gatherer_enter_file_name: string;
    parameter_gatherer_enter_dir_name: string;
    parameter_gatherer_enter_lwc_name: string;
    parameter_gatherer_enter_username_name: string;
    parameter_gatherer_enter_alias_name: string;
    parameter_gatherer_enter_custom_url: string;
    parameter_gatherer_enter_instance_url: string;
    parameter_gatherer_enter_session_id: string;
    parameter_gatherer_enter_session_id_placeholder: string;
    parameter_gatherer_enter_session_id_diagnostic_message: string;
    parameter_gatherer_enter_scratch_org_def_files: string;
    parameter_gatherer_enter_scratch_org_expiration_days: string;
    parameter_gatherer_enter_package_id: string;
    parameter_gatherer_enter_installation_key_if_necessary: string;
    parameter_gatherer_enter_project_name: string;
    parameter_gatherer_paste_forceide_url: string;
    parameter_gatherer_paste_forceide_url_placeholder: string;
    parameter_gatherer_invalid_forceide_url: string;
    parameter_gatherer_enter_function: string;
    parameter_gatherer_prompt_confirm_option: string;
    parameter_gatherer_prompt_cancel_option: string;
    parameter_gatherer_placeholder_org_list_clean: string;
    parameter_gatherer_placeholder_delete_selected_org: string;
    parameter_gatherer_placeholder_delete_default_org: string;
    force_org_create_default_scratch_org_text: string;
    force_org_create_result_parsing_error: string;
    force_org_open_default_scratch_org_text: string;
    force_org_open_default_scratch_org_container_error: string;
    force_org_open_container_mode_message_text: string;
    force_source_pull_default_org_text: string;
    force_source_pull_force_default_org_text: string;
    force_source_push_default_org_text: string;
    force_source_push_force_default_org_text: string;
    force_source_status_text: string;
    force_source_deploy_text: string;
    force_source_deploy_select_file_or_directory: string;
    force_source_deploy_select_manifest: string;
    force_source_retrieve_text: string;
    force_source_retrieve_display_text: string;
    force_source_retrieve_and_open_display_text: string;
    force_source_retrieve_select_file_or_directory: string;
    force_source_retrieve_select_manifest: string;
    force_source_delete_text: string;
    force_source_delete_manifest_unsupported_message: string;
    force_source_delete_select_file_or_directory: string;
    force_source_delete_confirmation_message: string;
    confirm_delete_source_button_text: string;
    cancel_delete_source_button_text: string;
    force_analytics_template_create_text: string;
    force_analytics_template_name_text: string;
    force_apex_class_create_text: string;
    force_visualforce_component_create_text: string;
    force_visualforce_page_create_text: string;
    force_lightning_app_create_text: string;
    force_lightning_component_create_text: string;
    force_lightning_event_create_text: string;
    force_lightning_interface_create_text: string;
    force_function_create_text: string;
    force_function_containerless_start_text: string;
    force_create_manifest: string;
    force_function_start_no_org_auth: string;
    force_function_start_warning_no_toml: string;
    force_function_start_warning_not_in_function_folder: string;
    force_function_start_warning_plugin_not_installed: string;
    force_function_start_warning_docker_not_installed_or_not_started: string;
    force_function_start_unexpected_error: string;
    force_function_invoke_text: string;
    force_function_invoke_tooltip: string;
    force_function_debug_invoke_tooltip: string;
    force_function_stop_text: string;
    force_function_stop_in_progress: string;
    force_function_stop_not_started: string;
    force_source_status_local_text: string;
    force_source_status_remote_text: string;
    warning_prompt_file_overwrite: string;
    warning_prompt_dir_overwrite: string;
    warning_prompt_continue_confirm: string;
    warning_prompt_overwrite_cancel: string;
    warning_prompt_overwrite_message: string;
    warning_prompt_overwrite: string;
    warning_prompt_overwrite_all: string;
    warning_prompt_skip: string;
    warning_prompt_skip_all: string;
    warning_prompt_other_existing: string;
    warning_prompt_other_not_shown: string;
    force_config_list_text: string;
    force_alias_list_text: string;
    force_org_delete_default_text: string;
    force_org_delete_username_text: string;
    force_org_display_default_text: string;
    force_org_display_username_text: string;
    force_org_list_clean_text: string;
    force_debugger_query_session_text: string;
    force_debugger_stop_text: string;
    force_debugger_stop_none_found_text: string;
    force_data_soql_query_input_text: string;
    force_data_soql_query_selection_text: string;
    parameter_gatherer_enter_soql_query: string;
    force_anon_apex_execute_document_text: string;
    force_anon_apex_execute_selection_text: string;
    force_package_install_text: string;
    force_project_create_text: string;
    force_project_create_open_dialog_create_label: string;
    force_project_create_standard_template: string;
    force_project_create_standard_template_display_text: string;
    force_project_create_empty_template_display_text: string;
    force_project_create_analytics_template_display_text: string;
    force_project_create_empty_template: string;
    force_project_create_analytics_template: string;
    force_apex_trigger_create_text: string;
    force_start_apex_debug_logging: string;
    force_apex_debug_log_status_bar_text: string;
    force_apex_debug_log_status_bar_hover_text: string;
    force_stop_apex_debug_logging: string;
    isv_debug_bootstrap_step1_create_project: string;
    isv_debug_bootstrap_step2_configure_project: string;
    isv_debug_bootstrap_step2_configure_project_retrieve_namespace: string;
    isv_debug_bootstrap_step3_retrieve_org_source: string;
    isv_debug_bootstrap_step4_convert_org_source: string;
    isv_debug_bootstrap_step5_list_installed_packages: string;
    isv_debug_bootstrap_step6_retrieve_packages_source: string;
    isv_debug_bootstrap_step7_convert_package_source: string;
    isv_debug_bootstrap_processing_package: string;
    isv_debug_bootstrap_generate_launchjson: string;
    isv_debug_bootstrap_open_project: string;
    error_creating_packagexml: string;
    error_extracting_org_source: string;
    error_extracting_packages: string;
    error_updating_sfdx_project: string;
    error_writing_installed_package_info: string;
    error_cleanup_temp_files: string;
    demo_mode_status_text: string;
    demo_mode_status_tooltip: string;
    demo_mode_prompt: string;
    force_auth_logout_all_text: string;
    force_auth_logout_default_text: string;
    manifest_input_dupe_error: string;
    manifest_input_save_placeholder: string;
    manifest_input_save_prompt: string;
    REST_API: string;
    tooling_API: string;
    REST_API_description: string;
    tooling_API_description: string;
    telemetry_legal_dialog_message: string;
    telemetry_legal_dialog_button_text: string;
    invalid_debug_level_id_error: string;
    auth_project_label: string;
    auth_project_detail: string;
    auth_prod_label: string;
    auth_prod_detail: string;
    auth_sandbox_label: string;
    auth_sandbox_detail: string;
    auth_custom_label: string;
    auth_custom_detail: string;
    auth_invalid_url: string;
    auth_logout_scratch_prompt: string;
    auth_logout_scratch_logout: string;
    auth_logout_no_default_org: string;
    error_fetching_auth_info_text: string;
    error_no_package_directories_found_on_setup_text: string;
    error_no_package_directories_paths_found_text: string;
    error_push_or_deploy_on_save_no_default_username: string;
    error_source_path_not_in_package_directory_text: string;
    org_select_text: string;
    org_expired: string;
    missing_default_org: string;
    force_config_set_org_text: string;
    force_config_set_title: string;
    table_header_name: string;
    table_header_value: string;
    table_header_success: string;
    error_parsing_sfdx_project_file: string;
    sfdx_cli_not_found: string;
    table_header_errors: string;
    table_header_project_path: string;
    table_header_type: string;
    table_header_full_name: string;
    table_header_state: string;
    table_header_error_type: string;
    table_header_message: string;
    table_no_results_found: string;
    table_title_deployed_source: string;
    table_title_deploy_errors: string;
    table_title_pushed_source: string;
    table_title_push_errors: string;
    push_conflicts_error: string;
    error_no_default_username: string;
    error_no_default_devhubusername: string;
    custom_output_directory: string;
    warning_using_global_username: string;
    apex_class_message_name: string;
    apex_trigger_message_name: string;
    visualforce_component_message_name: string;
    visualforce_page_message_name: string;
    aura_bundle_message_name: string;
    lwc_message_name: string;
    force_lightning_lwc_create_text: string;
    force_lightning_lwc_test_create_text: string;
    empty_components: string;
    error_auth_token: string;
    error_no_org_found: string;
    error_invalid_org_alias: string;
    error_invalid_expiration_days: string;
    error_fetching_metadata: string;
    error_org_browser_text: string;
    error_org_browser_init: string;
    error_workspace_context_init: string;
    error_overwrite_prompt: string;
    error_no_scratch_def: string;
    force_list_metadata: string;
    apex_execute_compile_success: string;
    apex_execute_runtime_success: string;
    apex_execute_text: string;
    force_apex_execute_library: string;
    AccessControlPolicy: string;
    ActionLinkGroupTemplate: string;
    AIApplication: string;
    AIApplicationConfig: string;
    AIAssistantTemplate: string;
    ActionLauncherItemDef: string;
    AnalyticSnapshot: string;
    AnimationRule: string;
    ApexClass: string;
    ApexComponent: string;
    ApexPage: string;
    ApexTestSuite: string;
    ApexTrigger: string;
    AppMenu: string;
    AppointmentAssignmentPolicy: string;
    AppointmentSchedulingPolicy: string;
    ApprovalProcess: string;
    AssignmentRules: string;
    AssistantRecommendationType: string;
    Audience: string;
    AuraDefinitionBundle: string;
    AuthProvider: string;
    AutoResponseRules: string;
    BatchProcessJobDefinition: string;
    BlacklistedConsumer: string;
    BrandingSet: string;
    BriefcaseDefinition: string;
    BusinessProcess: string;
    CallCenter: string;
    CallCenterRoutingMap: string;
    CampaignInfluenceModel: string;
    CaseSubjectParticle: string;
    Certificate: string;
    ChannelLayout: string;
    ChatterExtension: string;
    CleanDataService: string;
    CMSConnectSource: string;
    CommandAction: string;
    Community: string;
    CommunityTemplateDefinition: string;
    CommunityThemeDefinition: string;
    CompactLayout: string;
    ConnectedApp: string;
    ContentAsset: string;
    ConversationVendorInfo: string;
    CorsWhitelistOrigin: string;
    CspTrustedSite: string;
    CustomApplication: string;
    CustomApplicationComponent: string;
    CustomDataType: string;
    CustomExperience: string;
    CustomFeedFilter: string;
    CustomField: string;
    CustomFieldTranslation: string;
    CustomHelpMenuSection: string;
    CustomIndex: string;
    CustomLabels: string;
    CustomMetadata: string;
    CustomNotificationType: string;
    CustomObject: string;
    CustomObjectTranslation: string;
    CustomPageWebLink: string;
    CustomPermission: string;
    CustomSite: string;
    CustomTab: string;
    Dashboard: string;
    DashboardFolder: string;
    DataCategoryGroup: string;
    DataPipeline: string;
    DataWeaveResource: string;
    DelegateGroup: string;
    DigitalExperienceBundle: string;
    DigitalExperienceConfig: string;
    Document: string;
    DocumentFolder: string;
    DuplicateRule: string;
    EclairGeoData: string;
    EmailFolder: string;
    EmailServicesFunction: string;
    EmailTemplate: string;
    EmbeddedServiceBranding: string;
    EmbeddedServiceConfig: string;
    EmbeddedServiceFieldService: string;
    EmbeddedServiceFlowConfig: string;
    EmbeddedServiceLiveAgent: string;
    EntitlementProcess: string;
    EntitlementTemplate: string;
    EntityImplements: string;
    EscalationRules: string;
    EventDelivery: string;
    EventRelayConfig: string;
    EventSubscription: string;
    EventType: string;
    ExperienceBundle: string;
    ExperiencePropertyTypeBundle: string;
    ExternalCredential: string;
    ExternalDataSource: string;
    ExternalServiceRegistration: string;
    FeatureParameterBoolean: string;
    FeatureParameterDate: string;
    FeatureParameterInteger: string;
    FieldRestrictionRule: string;
    FieldSet: string;
    FlexiPage: string;
    Flow: string;
    FlowTest: string;
    FlowCategory: string;
    FlowDefinition: string;
    Form: string;
    GatewayProviderPaymentMethodType: string;
    GlobalPicklist: string;
    GlobalValueSet: string;
    GlobalValueSetTranslation: string;
    Group: string;
    HomePageComponent: string;
    HomePageLayout: string;
    IframeWhiteListUrlSettings: string;
    Index: string;
    InsightType: string;
    InstalledPackage: string;
    IntegrationHubSettings: string;
    IntegrationHubSettingsType: string;
    IPAddressRange: string;
    KeywordList: string;
    Layout: string;
    LeadConvertSettings: string;
    Letterhead: string;
    LicenseDefinition: string;
    LightningBolt: string;
    LightningComponentBundle: string;
    LightningExperienceTheme: string;
    ListView: string;
    LiveChatAgentConfig: string;
    LiveChatButton: string;
    LiveChatDeployment: string;
    LiveChatSensitiveDataRule: string;
    ManagedTopics: string;
    MarketingResourceType: string;
    MatchingRules: string;
    MilestoneType: string;
    MLDataDefinition: string;
    MLPredictionDefinition: string;
    MLRecommendationDefinition: string;
    ModerationRule: string;
    NamedCredential: string;
    NavigationMenu: string;
    Network: string;
    NetworkBranding: string;
    OauthCustomScope: string;
    Orchestration: string;
    OrchestrationContext: string;
    PathAssistant: string;
    PermissionSet: string;
    PermissionSetGroup: string;
    PersonAccountOwnerPowerUser: string;
    PlatformCachePartition: string;
    PlatformEventChannel: string;
    PlatformEventSubscriberConfig: string;
    Portal: string;
    PortalDelegablePermissionSet: string;
    PostTemplate: string;
    PresenceDeclineReason: string;
    PresenceUserConfig: string;
    ProductAttributeSet: string;
    Profile: string;
    ProfilePasswordPolicy: string;
    ProfileSessionSetting: string;
    Prompt: string;
    Queue: string;
    QueueRoutingConfig: string;
    QuickAction: string;
    RecommendationStrategy: string;
    RecordActionDeployment: string;
    RecordType: string;
    RedirectWhitelistUrl: string;
    RegisteredExternalService: string;
    RemoteSiteSetting: string;
    Report: string;
    ReportFolder: string;
    ReportType: string;
    RestrictionRule: string;
    Role: string;
    SamlSsoConfig: string;
    Scontrol: string;
    SearchCustomization: string;
    ServiceChannel: string;
    ServicePresenceStatus: string;
    Settings: string;
    SharingCriteriaRule: string;
    SharingOwnerRule: string;
    SharingReason: string;
    SharingRules: string;
    SharingSet: string;
    SharingTerritoryRule: string;
    SiteDotCom: string;
    Skill: string;
    StandardValueSet: string;
    StandardValueSetTranslation: string;
    StaticResource: string;
    SynonymDictionary: string;
    Territory2: string;
    Territory2Model: string;
    Territory2Rule: string;
    Territory2Type: string;
    Territory: string;
    TopicsForObjects: string;
    TransactionSecurityPolicy: string;
    Translations: string;
    UiPlugin: string;
    UserCriteria: string;
    UserProfileSearchScope: string;
    ValidationRule: string;
    VisualizationPlugin: string;
    WaveApplication: string;
    WaveDashboard: string;
    WaveDataflow: string;
    WaveDataset: string;
    WaveLens: string;
    WaveRecipe: string;
    WaveTemplateBundle: string;
    WaveXmd: string;
    WebLink: string;
    Workflow: string;
    XOrgHub: string;
    LightningMessageChannel: string;
    InboundNetworkConnection: string;
    OutboundNetworkConnection: string;
    MutingPermissionSet: string;
    MyDomainDiscoverableLogin: string;
    UserProvisioningConfig: string;
    ApexEmailNotifications: string;
    PlatformEventChannelMember: string;
    CanvasMetadata: string;
    MobileApplicationDetail: string;
    NotificationTypeConfig: string;
    LightningOnboardingConfig: string;
    ManagedContentType: string;
    PaymentGatewayProvider: string;
    EmbeddedServiceMenuSettings: string;
    CallCoachingMediaProvider: string;
    conflict_detect_execution_name: string;
    conflict_detect_error: string;
    conflict_detect_initialization_error: string;
    conflict_detect_conflicts_during_deploy: string;
    conflict_detect_conflicts_during_retrieve: string;
    conflict_detect_override: string;
    conflict_detect_show_conflicts: string;
    conflict_detect_conflict_header: string;
    conflict_detect_conflict_header_timestamp: string;
    conflict_detect_command_hint: string;
    conflict_detect_no_default_username: string;
    conflict_detect_no_default_package_dir: string;
    conflict_detect_view_init: string;
    conflict_detect_not_enabled: string;
    conflict_detect_root_title: string;
    conflict_detect_view_root: string;
    conflict_detect_no_conflicts: string;
    conflict_detect_no_differences: string;
    conflict_detect_diff_title: string;
    conflict_detect_diff_command_title: string;
    conflict_detect_remote_last_modified_date: string;
    conflict_detect_local_last_modified_date: string;
    force_source_diff_text: string;
    force_source_diff_components_not_in_org: string;
    force_source_diff_unsupported_type: string;
    force_source_diff_title: string;
    force_source_diff_folder_title: string;
    beta_tapi_mdcontainer_error: string;
    beta_tapi_membertype_error: string;
    beta_tapi_car_error: string;
    beta_tapi_queue_status: string;
    lib_retrieve_result_title: string;
    lib_retrieve_result_parse_error: string;
    lib_retrieve_message_title: string;
    package_id_validation_error: string;
    package_id_gatherer_placeholder: string;
    force_function_enter_function: string;
    force_function_enter_language: string;
    force_function_install_npm_dependencies_progress: string;
    force_function_install_npm_dependencies_error: string;
    force_function_install_mvn_dependencies_error: string;
    sobjects_refresh_needed: string;
    sobjects_refresh_now: string;
    force_sobjects_refresh: string;
    sobject_refresh_all: string;
    sobject_refresh_custom: string;
    sobject_refresh_standard: string;
    force_sobjects_no_refresh_if_already_active_error_text: string;
    force_rename_lightning_component: string;
    rename_component_input_dup_error: string;
    rename_component_input_dup_file_name_error: string;
    rename_component_input_placeholder: string;
    rename_component_input_prompt: string;
    rename_component_warning: string;
    rename_component_error: string;
    error_function_type: string;
    error_unable_to_get_started_function: string;
    pending_org_expiration_expires_on_message: string;
    pending_org_expiration_notification_message: string;
    pending_org_expiration_output_channel_message: string;
    aura_doc_url: string;
    apex_doc_url: string;
    soql_doc_url: string;
    lwc_doc_url: string;
    functions_doc_url: string;
    default_doc_url: string;
    parameter_gatherer_file_name_max_length_validation_error_message: string;
    source_status: string;
};
