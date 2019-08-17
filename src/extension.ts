'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { hexToRgba, rgbaToHex, toggleHexRgba } from './converter';

const applyFnToSelections = fn => {
  console.log(
    'Hey Hacker, Thanks for Checking Out Hex-to-RGBA. I hope you liked it and if you did, then please checkout my other OpenSource Projects. Find me at: https://dak.sh'
  );

  if (vscode.window.activeTextEditor == null) {
    vscode.window.showErrorMessage('Please Open up a File to Edit.');
    return;
  }

  const editor = vscode.window.activeTextEditor;
  const applyFnToSelection = (edit: vscode.TextEditorEdit) => (
    s: vscode.Selection
  ) => {
    if (s.isEmpty) return;
    const value = editor.document.getText(s);
    edit.replace(s, fn(value));
  };
  editor.edit(edit => {
    editor.selections.forEach(applyFnToSelection(edit));
  });
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.convertToRGBA', () => {
      applyFnToSelections(hexToRgba);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.convertToHEX', () => {
      applyFnToSelections(rgbaToHex);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.toggleHEX', () => {
      applyFnToSelections(toggleHexRgba);
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {
  vscode.window.showInformationMessage('Hex-to-RGBA has been Deactivated!');
}
