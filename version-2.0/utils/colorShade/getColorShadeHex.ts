import { Percent, HexColor } from '../../shared';
import rgbToHex from '../rgbToHex/rgbToHex';
import hexToRGB from '../hexToRgb/hexToRgb';
import { colorValueShade } from './getColorShade';

//TODO: Add documentation
export default function getColorShadeHex(color: HexColor, percent: Percent): HexColor {

  // TODO: Refactor
  //Step 1: Convert hex to rgb HexColor => RgbColor
  const { red, green, blue } = hexToRGB(color);

  //Step 2: Calculate Shade => RgbColor
  const _shade = {
    red: colorValueShade(red, percent),
    green: colorValueShade(green, percent),
    blue: colorValueShade(blue, percent)
  };

  //Step 3: Convert RgbColor => HexColor and Return hexColor
  return rgbToHex(_shade.red, _shade.green, _shade.blue);
}