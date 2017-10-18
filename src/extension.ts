'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as HexToRGBA from 'hex-rgba'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.convertToRGBA', () => {
        // The code you place here will be executed every time your command is executed
        if(typeof vscode.window.activeTextEditor != 'undefined') {
            let editor = vscode.window.activeTextEditor
            if(editor.document.getText(editor.selection) !== '') {
                editor.edit((edit) => {
                    let selectedText = editor.document.getText(editor.selection)
                    let opacity:any = selectedText.split('_')[1] || "100" // else use 100 % accuracy.
                    if(opacity !== "100") {
                        selectedText = selectedText.split('_')[0]
                    }
                    edit.replace(editor.selection, HexToRGBA(selectedText, opacity))
                })
            } else {
                vscode.window.showErrorMessage('Select Something to convert to RGBA')
            }
        } else {
            vscode.window.showErrorMessage('Please Open up a File to Edit.')
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}