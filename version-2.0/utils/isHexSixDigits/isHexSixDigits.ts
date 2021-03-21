//TODO: Add documentation
import { HexColor, sixDigitHexRegex } from '../../shared';

export default function isHexSixDigits(color: HexColor): boolean {
  return sixDigitHexRegex.test(color);
}