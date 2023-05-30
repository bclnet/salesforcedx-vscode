import { workspace, WorkspaceFolder } from 'vscode';
declare function hasRootWorkspace(ws?: typeof workspace): boolean;
declare function getRootWorkspace(): WorkspaceFolder;
declare function getRootWorkspacePath(): string;
export declare const workspaceUtils: {
    hasRootWorkspace: typeof hasRootWorkspace;
    getRootWorkspace: typeof getRootWorkspace;
    getRootWorkspacePath: typeof getRootWorkspacePath;
};
export {};
