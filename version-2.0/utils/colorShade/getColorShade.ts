import { RgbValue, Percent, RgbColor } from '../../shared';
import getColorDifference from '../getColorDifference';

//TODO: Add documentation
export function colorValueShade(color: RgbValue, percent: Percent = 100): RgbValue {
  return Math.round(color * (percent / 100));
}
//TODO: Add documentation
export default function getColorShade(color: RgbColor, percent: Percent = 100): RgbColor {
  return getColorDifference(color, percent, colorValueShade);
}