import { Percent, HexColor } from '../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import rgbToHex from '../rgbToHex/rgbToHex';
import { colorValueTint } from './getColorTint';

//TODO: Add documentation
//TODO: Add generic function for getColorTint and getColorShade because they are similar
export default function getColorTintHex(color: HexColor, percent: Percent): HexColor {

  // TODO: Refactor
  //Step 1: Convert hex to rgb HexColor => RgbColor
  const { red, green, blue } = hexToRGB(color);

  //Step 2: Calculate Shade => RgbColor
  const _shade = {
    red: colorValueTint(red, percent),
    green: colorValueTint(green, percent),
    blue: colorValueTint(blue, percent)
  };

  //Step 3: Convert RgbColor => HexColor and Return hexColor
  return rgbToHex(_shade.red, _shade.green, _shade.blue);
}