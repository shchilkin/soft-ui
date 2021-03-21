import { RgbValue, Percent, RgbColor, HexColor, isRGb } from '../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import rgbToHex from '../rgbToHex/rgbToHex';

//TODO: Add documentation
export function colorValueTint(color: RgbValue, percent: Percent): RgbValue {
  const _color = color + (255 - color) * (percent / 100);

  return _color > 255 ? 255 : Math.round(_color);
}

//TODO: Add documentation
//TODO: Add generic function for getColorTint and getColorShade because they are similar
export default function getColorTint(color: RgbColor | HexColor, percent: Percent): RgbColor | HexColor {

  if (isRGb(color))
    return {
      red: colorValueTint(color.red, percent),
      green: colorValueTint(color.green, percent),
      blue: colorValueTint(color.blue, percent)
    };

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