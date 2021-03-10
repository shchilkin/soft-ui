import { hexColor } from '../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import isValidHexColor from '../isValidHexColor/isValidHexColor';

// TODO: Return true or false instead of color => will help to apply darker/lighter version of the main color
//  in the future or return dark / light variation directly

/**
 * Returns a number in range between lower and upper bounds including the bounds numbers
 *
 * @param  {[string]} color A hexadecimal triplet
 * @return {[string]}         Black or White hexadecimal triplet
 */
export default function getFontColor(color: hexColor): hexColor {

  // TODO: Return bright or dark variant of Main color instead of pure black / white
  if (isValidHexColor(color)) {
    const rgb = hexToRGB(color);

    const { red, green, blue } = rgb;

    const luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;

    if (luminance > 0.5) {
      return '#000000';
    } else {
      return '#FFFFFF';
    }
  } else {
    throw new Error(`Invalid hex color. Got: ${color.toUpperCase()}. Pass a valid hex triplet`);
  }
}