import * as HexAndRgba from 'hex-and-rgba';

const HexToRgba = HexAndRgba.hexToRgba;
const RgbaToHex = HexAndRgba.rgbaToHex;
const RgbaToArray = HexAndRgba.rgbaToArray;
const IsValidHex = HexAndRgba.isValidHex;
const IsValidRGBA = args => !!rgbaToHex(args);

export const hexToRgba = (value: string) => {
  const [hex, opacity] = value.split('_');
  let rgba = HexToRgba(hex);
  if (opacity) {
    rgba[rgba.length - 1] = Number(opacity) / 100;
  }
  return `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3].toPrecision(2)})`;
};

export const rgbaToHex = (rgba: string | number[]) => {
  let hex = Array.isArray(rgba)
    ? RgbaToHex(rgba)
    : RgbaToHex(RgbaToArray(rgba));
  return hex.toString();
};

export const toggleHexRgba = (value: string | number[]) => {
  if (IsValidHex(value)) return hexToRgba(value as string);
  if (IsValidRGBA(value)) return rgbaToHex(value);
};
