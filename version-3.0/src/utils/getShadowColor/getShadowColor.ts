import { HexColor, RgbColor, RgbValue, ShadowColors } from '../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import rgbToHex from '../rgbToHex/rgbToHex';

/**
 * Calculates dark and bright shadows for a given color
 * @param  {[HexColor]} color A hexadecimal color triplet
 * @param  {[number]} factor percentage how much darker / lighter the shadows will be
 * @return {[ShadowColors]}      Object contain hexadecimal values of light and dark shadows
 */
export default function getShadowColor(color: HexColor, factor = 15): ShadowColors {

  const { red, green, blue } = hexToRGB(color);

  const colorWithFactor = (color: RgbValue, isLight: boolean): RgbValue => {
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

  const lightShadowRGB: RgbColor = {
    red: colorWithFactor(red, true),
    green: colorWithFactor(green, true),
    blue: colorWithFactor(blue, true)
  };

  const darkShadowRGB: RgbColor = {
    red: colorWithFactor(red, false),
    green: colorWithFactor(green, false),
    blue: colorWithFactor(blue, false)
  };

  return {
    lightShadow: rgbToHex(lightShadowRGB.red, lightShadowRGB.green, lightShadowRGB.blue),
    darkShadow: rgbToHex(darkShadowRGB.red, darkShadowRGB.green, darkShadowRGB.blue)
  };
}