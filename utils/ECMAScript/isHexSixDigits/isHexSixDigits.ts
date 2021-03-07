//TODO: Add documentation
import { hexColor, sixDigitHexRegex } from '../../../shared';

export default function isHexSixDigits(color: hexColor): boolean {
  return sixDigitHexRegex.test(color);
}