import { Percent, RgbColor, RgbValue } from '../shared';

//TODO: Add documentation
export default function getColorDifference(
  color: RgbColor,
  percent: Percent,
  colorDifferenceUtility: (color: RgbValue, percent: Percent) => RgbValue): RgbColor {
  return {
    red: colorDifferenceUtility(color.red, percent),
    green: colorDifferenceUtility(color.green, percent),
    blue: colorDifferenceUtility(color.blue, percent)
  };
}