//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as converter from '../converter';
import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', () => {
  test('Convert RGBA string with 20% opacity to 8-digit HEX', () => {
    const hex = converter.rgbaToHex('rgba(75,95,130,0.20)');
    assert.equal(hex, '#4b5f8233');
  });

  test('Convert RGBA array with 20% opacity to 8-digit HEX', () => {
    const hex = converter.rgbaToHex([75, 95, 130, 0.2]);
    assert.equal(hex, '#4b5f8233');
  });

  test('Convert 8-digit HEX to RGBA with 31% opacity', () => {
    const hex = converter.hexToRgba('#030d204f');
    assert.equal(hex, 'rgba(3,13,32,0.31)');
  });

  test('Convert 6-digit HEX with 20% opacity postfix to RGBA', () => {
    const hex = converter.hexToRgba('#4b5f82_20');
    assert.equal(hex, 'rgba(75,95,130,0.20)');
  });

  test('Toggle RGBA with 20% opacity to 8-digit HEX', () => {
    const originalRGBA = 'rgba(75,95,130,0.2)';

    const hex = converter.toggleHexRgba(originalRGBA);
    assert.equal(hex, '#4b5f8233');
  });

  test('Toggle 8-digit HEX to RGBA with 31% opacity', () => {
    const originalHEX = '#030d204f';

    const rgba = converter.toggleHexRgba(originalHEX);
    assert.equal(rgba, 'rgba(3,13,32,0.31)');
  });
});
