import { HexColor } from '../../shared';
import isValidHexColor from '../isValidHexColor/isValidHexColor';
import hexToRGB from '../hexToRgb/hexToRgb';

export default function isFontColorDark(color: HexColor):boolean{
  if (isValidHexColor(color)) {
    const rgb = hexToRGB(color);

    const { red, green, blue } = rgb;

    const luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;

    return luminance > 0.5;
  } else {
    throw new Error(`Invalid hex color. Got: ${color.toUpperCase()}. Pass a valid hex triplet`);
  }
}