import { hexColor, rgbColor, sixDigitHexRegex } from '../../../shared';
import threeDigitHexToSixDigit from '../threeDigitHexToSixDigit/threeDigitHexToSixDigit';
import isHexSixDigits from '../isHexSixDigits/isHexSixDigits';

//TODO: Add documentation
export default function hexToRGB(color: hexColor): rgbColor {
  //TODO: Refactor

  if (isHexSixDigits(color)) {
    const hexColorArray = sixDigitHexRegex.exec(color);
    return {
      red: parseInt(hexColorArray[1], 16),
      green: parseInt(hexColorArray[2], 16),
      blue: parseInt(hexColorArray[3], 16)
    };
  } else {
    const hexColorArray = sixDigitHexRegex.exec(threeDigitHexToSixDigit(color));
    return {
      red: parseInt(hexColorArray[1], 16),
      green: parseInt(hexColorArray[2], 16),
      blue: parseInt(hexColorArray[3], 16)
    };
  }
}