import { HexColor, threeDigitHexRegex } from '../../shared';

//TODO: Add documentation
export default function threeDigitHexToSixDigit(color: HexColor): HexColor {
  // TODO: Refactor
  const hexColorArray = threeDigitHexRegex.exec(color);
  return `#${hexColorArray[1].repeat(2)}${hexColorArray[2].repeat(2)}${hexColorArray[3].repeat(2)}`;
}