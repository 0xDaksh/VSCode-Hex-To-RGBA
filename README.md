# Hex-To-RGBA Extension

> Hex-to-RGBA Allows designers to convert selected Hex Code to RGBA on Visual Studio Code easily.

### Shortcuts
#### converts selected text to RGBA
  - Windows/Linux: `ctrl-alt-h`
  - MacOS: `cmd-shift-c`

*Awesome Tip*: Postfix the opacity to the hex followed by `_` to add the opacity to the converted rgba.

Example:
`#333333_86` to generate `rgba(51, 51, 51, 0.86)`.


----

![A screenshot of Hex-to-RGBA on VSCODE Using Some Pero Pero Shortcuts.](https://media.giphy.com/media/xT9IgHoVN8I7eLp5w4/giphy.gif)

### Tests

```
background: #ffb300;
background: #ffb8f0_29;
background: #333333_19;

\\ above tests simultaneously converted to:

background: rgba(255, 179 ,0, 1);
background: rgba(255, 184 ,240, 0.29);
background: rgba(51, 51 ,51, 0.19);
```
