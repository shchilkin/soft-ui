import { hexColor } from '../../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import isValidHexColor from '../isValidHexColor/isValidHexColor';

//TODO: Add documentation
export default function getFontColor(color: hexColor): hexColor {

  const rgb = hexToRGB(color);

  const { red, green, blue } = rgb;

  const luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;

  // TODO: Return bright or dark variant of Main color instead of pure black / white
  if(isValidHexColor(color)){
    if (luminance > 0.5) {
      return '#000000';
    } else {
      return '#FFFFFF';
    }
  } else {
    throw new Error(`Invalid hex color. Got: ${color}`)
  }
}