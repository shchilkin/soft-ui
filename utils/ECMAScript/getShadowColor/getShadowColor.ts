import { hexColor, rgbColor, rgbValue, shadowColors } from '../../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import rgbToHex from '../rgbToHex/rgbToHex';

//TODO: Add documentation
export default function getShadowColor(color: hexColor, factor = 15): shadowColors {

  const { red, green, blue } = hexToRGB(color);

  const colorWithFactor = (color: rgbValue, isLight: boolean): rgbValue => {
    const _factor = factor / 100;
    let _color = isLight ? color + (color * _factor) : color - (color * _factor);

    if (_color > 255) {
      _color = 255;
    }

    if (_color < 0) {
      _color = 0;
    }

    return Math.round(_color);
  };

  const lightShadowRGB: rgbColor = {
    red: colorWithFactor(red, true),
    green: colorWithFactor(green, true),
    blue: colorWithFactor(blue, true)
  };

  const darkShadowRGB: rgbColor = {
    red: colorWithFactor(red, false),
    green: colorWithFactor(green, false),
    blue: colorWithFactor(blue, false)
  };

  return {
    lightShadow: rgbToHex(lightShadowRGB.red, lightShadowRGB.green, lightShadowRGB.blue),
    darkShadow: rgbToHex(darkShadowRGB.red, darkShadowRGB.green, darkShadowRGB.blue)
  };
}