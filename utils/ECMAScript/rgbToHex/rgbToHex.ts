import { hexColor, rgbValue } from '../../../shared';

//TODO: Add documentation
export default function rgbToHex(red: rgbValue, green:rgbValue, blue:rgbValue): hexColor {
  return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}