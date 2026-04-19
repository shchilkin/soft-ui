import { Percent, RgbColor, RgbValue } from '../shared';

interface ColorDifferenceArgs {
  color: RgbColor;
  percent: Percent;
  colorDifferenceUtility: (color: RgbValue, percent: Percent) => RgbValue;
}

/**
 * Internal function for calculating tint or shade.
 * Should not be used directly in library.
 *
 * @param {RgbColor} color - RGB Color object
 * @param {Percent} percent - number in range 0 - 100
 * @param {function} colorDifferenceUtility - an utility function which calculate a RGB Color values
 *
 * @returns {RgbColor} A color's tint or shade depending on colorDifferenceUtility
 * */
export default function getColorDifference({color, percent, colorDifferenceUtility}: ColorDifferenceArgs): RgbColor {
  return {
    red: colorDifferenceUtility(color.red, percent),
    green: colorDifferenceUtility(color.green, percent),
    blue: colorDifferenceUtility(color.blue, percent)
  };
}