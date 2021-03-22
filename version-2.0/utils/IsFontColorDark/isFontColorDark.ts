import { HexColor } from '../../shared';
import getLuminance from '../getLuminance/getLuminance';
import hexToRGB from '../hexToRgb/hexToRgb';

/**
 * Returns true is color is light, otherwise returns false
 *
 * @param {[HexColor]} color Hexadecimal Color Triplet
 * @returns {[boolean]} - Result is font should be dark
 * */
export default function isFontColorDark(color: HexColor): boolean {
  return getLuminance(hexToRGB(color)) > 0.5;
}