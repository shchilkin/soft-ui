import { HexColor, RgbValue } from '../../shared';

//TODO: Add documentation
export default function rgbToHex(red: RgbValue, green:RgbValue, blue:RgbValue): HexColor {
  return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}