import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];

    disposables.push(vscode.commands.registerCommand('vscode-quickopen.prefix', () => {
        vscode.commands.executeCommand('workbench.action.quickOpen', '>Fold');
    }));

    disposables.push(vscode.commands.registerCommand('vscode-quickopen.no-prefix', () => {
        vscode.commands.executeCommand('workbench.action.quickOpen');
    }));

    context.subscriptions.push(...disposables);
}

export function deactivate() { }
