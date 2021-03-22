import { Percent, HexColor } from '../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import rgbToHex from '../rgbToHex/rgbToHex';
import getColorTint from './getColorTint';

//TODO: Add documentation
export default function getColorTintHex(color: HexColor, percent: Percent = 0): HexColor {
  const { red, green, blue } = getColorTint(hexToRGB(color), percent);
  return rgbToHex(red, green, blue);
}