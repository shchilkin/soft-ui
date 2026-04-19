import { Percent, HexColor } from '../../shared';
import hexToRGB from '../hexToRgb/hexToRgb';
import rgbToHex from '../rgbToHex/rgbToHex';
import getColorTint from './getColorTint';

/**
 * getColorTint wrapper for Hexadecimal colors
 *
 * @param {HexColor} color hexadecimal color triplet
 * @param {Percent} percent number in range 0 - 100
 * @returns color's tint in hexadecimal color triplet format
 * */
export default function getColorTintHex(color: HexColor, percent: Percent = 0): HexColor {
  const { red, green, blue } = getColorTint(hexToRGB(color), percent);
  return rgbToHex(red, green, blue);
}