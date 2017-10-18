# hex-to-rgba package

> Hex-to-RGBA Allows designers to convert selected Hex Code to RGBA on VSCODE easily.

### Shortcuts
#### converts selected text to RGBA
  - Windows/Linux: `ctrl-alt-h`
  - MacOS: c`md-shift-c`

*Awesome Tip*: Postfix the opacity to the hex followed by `_` to add the opacity to the converted rgba.

Example:
`#333333_86` to generate `rgba(51, 51, 51, 0.86)`.


----

![A screenshot of Hex-to-RGBA on VSCODE Using Some Pero Pero Shortcuts.](https://media.giphy.com/media/3ov9k5VY5l67GiGxpu/giphy.gif)

### Tests

```
background: #ffb300;
background: #ffb8f0_29;
background: #000_52;
background: #333333_19;
background: #000000_6;
background: #fff_96;
background: #e3e3e3;
background: #eee_08;
background: #f3f3f3_81;

\\ above tests simultaneously converted to:

background: rgba(255, 179 ,0, 1);
background: rgba(255, 184 ,240, 0.29);
background: rgba(0, 0 ,82, 0.52);
background: rgba(51, 51 ,51, 0.19);
background: rgba(0, 0 ,0, 0.6);
background: rgba(255, 15 ,150, 0.96);
background: rgba(227, 227 ,227, 1);
background: rgba(238, 14 ,8, 0.08);
background: rgba(243, 243 ,243, 0.81);
```
