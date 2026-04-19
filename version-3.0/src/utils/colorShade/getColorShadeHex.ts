import { Percent, HexColor } from '../../shared';
import rgbToHex from '../rgbToHex/rgbToHex';
import hexToRGB from '../hexToRgb/hexToRgb';
import getColorShade from './getColorShade';

//TODO Refactor to single function getColorShade
/**
 * getColorShade wrapper for Hexadecimal colors
 *
 * @param {HexColor} color hexadecimal color triplet
 * @param {Percent} percent number in range 0 - 100
 * @returns color's shade in hexadecimal color triplet format
 * */
export default function getColorShadeHex(color: HexColor, percent: Percent = 100): HexColor {
  const { red, green, blue } = getColorShade(hexToRGB(color), percent);
  return rgbToHex(red, green, blue);
}