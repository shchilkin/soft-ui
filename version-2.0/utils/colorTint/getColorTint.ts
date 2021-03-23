import { RgbValue, Percent, RgbColor } from '../../shared';
import getColorDifference from '../getColorDifference';


/**
 * Utility function which calculates tint value.
 * Used for each RGB Value separately.
 *
 * @param {RgbValue} color RGB value in range 0 - 255
 * @param {Percent} percent number in range 0 - 100
 * @returns {RgbValue} RGB value for color tint
 * */
export function colorValueTint(color: RgbValue, percent: Percent = 0): RgbValue {
  const tint = color + (255 - color) * (percent / 100);
  return tint > 255 ? 255 : Math.round(tint);
}

/**
 * Calculates RGB Color's tint
 * @param {RgbColor} color Input RGB color object
 * @param percent number in range 0 - 100
 *
 * @returns {RgbColor} Tint of the Color as RGB color object
 * */
export default (color: RgbColor, percent: Percent = 0): RgbColor => getColorDifference({color : color, percent : percent, colorDifferenceUtility : colorValueTint})