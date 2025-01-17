import * as vscode from 'vscode';
export declare class DeployQueue {
    static readonly ENQUEUE_DELAY = 500;
    private static instance;
    private readonly queue;
    private timer;
    private locked;
    private deployWaitStart?;
    private constructor();
    static get(): DeployQueue;
    static reset(): void;
    enqueue(document: vscode.Uri): Promise<void>;
    unlock(): Promise<void>;
    private wait;
    private executeDeployCommand;
    private executePushCommand;
    private doDeploy;
}
export declare function registerPushOrDeployOnSave(): Promise<void>;
export declare function pathIsInPackageDirectory(documentPath: string): Promise<boolean>;
export declare function fileShouldNotBeDeployed(fsPath: string): boolean;
