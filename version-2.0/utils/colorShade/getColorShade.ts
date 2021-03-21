import { RgbValue, Percent, RgbColor, HexColor, isRGb } from '../../shared';
import rgbToHex from '../rgbToHex/rgbToHex';
import hexToRGB from '../hexToRgb/hexToRgb';

//TODO: Add documentation
export function colorValueShade(color: RgbValue, percent: Percent): RgbValue {
  return Math.round(color * (percent / 100));
}

//TODO: Add documentation
export default function getColorShade(color: RgbColor | HexColor, percent: Percent): RgbColor | HexColor {

  if (isRGb(color))
    return {
      red: colorValueShade(color.red, percent),
      green: colorValueShade(color.green, percent),
      blue: colorValueShade(color.blue, percent)
    };

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