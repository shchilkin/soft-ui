import { RgbValue, Percent, RgbColor } from '../../shared';
import getColorDifference from '../getColorDifference';

/**
 * Utility function which calculates shade value.
 * Used for each RGB Value separately.
 *
 * @param {RgbValue} color RGB value in range 0 - 255
 * @param {Percent} percent - number in range 0 - 100
 * @returns {RgbValue} RGB value for color shade
 * */
export const colorValueShade = (color: RgbValue, percent: Percent = 100): RgbValue => Math.round(
  color * (percent / 100));

/**
 * Calculates RGB Color's shade
 * @param {RgbColor} color Input RGB color object
 * @param percent number in range 0 - 100
 *
 * @returns {RgbColor} shade of the Color as RGB color object
 * */
export default function getColorShade(color: RgbColor, percent: Percent = 100): RgbColor {
  return getColorDifference({color : color, percent : percent, colorDifferenceUtility : colorValueShade});
}