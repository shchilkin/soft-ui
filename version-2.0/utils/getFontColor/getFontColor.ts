import { HexColor } from '../../shared';
import isValidHexColor from '../isValidHexColor/isValidHexColor';
import isFontColorDark from '../IsFontColorDark/isFontColorDark';
import getColorShadeHex from '../colorShade/getColorShadeHex';
import getColorTintHex from '../colorTint/getColorTintHex';

// TODO: in the future or return dark / light variation directly

type BlackOrWhite = false;
type MainColorVariation = true;

type getFontColorReturnMode = BlackOrWhite | MainColorVariation;
/**
 * Returns a number in range between lower and upper bounds including the bounds numbers
 *
 * @param  {[String]} color A hexadecimal triplet
 * @param {[Boolean]} fontColorReturnMode A flag for return mode true for Main Color Variation
 * and false for Black or White color
 * @return {[String]}         Font color in  hexadecimal triplet form
 */
export default function getFontColor(color: HexColor, fontColorReturnMode: getFontColorReturnMode = false): HexColor {
  if (isValidHexColor(color)) {
    if (isFontColorDark(color)) {
      return fontColorReturnMode ? getColorShadeHex(color, 10) : '#000000';
    } else {
      return fontColorReturnMode ? getColorTintHex(color, 90) : '#FFFFFF';
    }
  } else {
    throw new Error(`Invalid hex color. Got: ${color.toUpperCase()}. Pass a valid hex triplet`);
  }
}