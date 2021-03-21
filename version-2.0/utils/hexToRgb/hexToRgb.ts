import { HexColor, RgbColor, sixDigitHexRegex } from '../../shared';
import threeDigitHexToSixDigit from '../threeDigitHexToSixDigit/threeDigitHexToSixDigit';
import isHexSixDigits from '../isHexSixDigits/isHexSixDigits';
import isValidHexColor from '../isValidHexColor/isValidHexColor';

/**
 * Converts hexadecimal triplet to RGB Object
 * @param  {[HexColor]} color A hexadecimal color triplet
 * @return {[RgbColor]}      An object, containing red, green and blue values
 */
export default function hexToRGB(color: HexColor): RgbColor {
  if (isValidHexColor(color)) {
    const hexColorArray = sixDigitHexRegex.exec(isHexSixDigits(color) ? color : threeDigitHexToSixDigit(color));

    return {
      red: parseInt(hexColorArray[1], 16),
      green: parseInt(hexColorArray[2], 16),
      blue: parseInt(hexColorArray[3], 16)
    };
  } else {
    throw new Error(`Invalid hexadecimal color! Got: ${color}.  Pass a valid hex triplet.`);
  }
}