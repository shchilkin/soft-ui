import { Percent, HexColor } from '../../shared';
import rgbToHex from '../rgbToHex/rgbToHex';
import hexToRGB from '../hexToRgb/hexToRgb';
import getColorShade from './getColorShade';

//TODO: Add documentation
//TODO Refactor to single function getColorShade
export default function getColorShadeHex(color: HexColor, percent: Percent = 100): HexColor {
  const { red, green, blue } = getColorShade(hexToRGB(color), percent);
  return rgbToHex(red, green, blue);
}