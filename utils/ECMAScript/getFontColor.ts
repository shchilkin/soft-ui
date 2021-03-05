import { hexColor } from '../../shared';
import hexToRGB from './hexToRgb';

//TODO: Add documentation
export default function getFontColor(color: hexColor): hexColor {

  const rgb = hexToRGB(color);

  const { red, green, blue } = rgb;

  const luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;

  if (luminance > 0.5) {
    return '#000000';
  } else {
    return '#FFFFFF';
  }
}