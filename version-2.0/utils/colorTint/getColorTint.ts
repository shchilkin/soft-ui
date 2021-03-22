import { RgbValue, Percent, RgbColor } from '../../shared';
import getColorDifference from '../getColorDifference';


//TODO: Add documentation
export function colorValueTint(color: RgbValue, percent: Percent = 0): RgbValue {
  const _color = color + (255 - color) * (percent / 100);

  return _color > 255 ? 255 : Math.round(_color);
}

//TODO: Add documentation
export default function getColorTint(color: RgbColor, percent: Percent = 0): RgbColor {
  return getColorDifference(color, percent, colorValueTint);
}