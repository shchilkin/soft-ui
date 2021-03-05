import { hexColor, rgbColor, sixDigitHexRegex, threeDigitHexRegex } from '../../shared';

/**
 * Check is hex color valid
 * @param color {string} a hexadecimal triplet we want to check
 * @returns {boolean} True or False
 * */
export function isValidHexColor(color: string): boolean {
  const hexRegularExpression = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexRegularExpression.test(color);
}

//TODO: Add documentation
export function threeDigitHexToSixDigit(color: hexColor): hexColor {
  // TODO: Refactor
  const hexColorArray = threeDigitHexRegex.exec(color);
  return `#${hexColorArray[1].repeat(2)}${hexColorArray[2].repeat(2)}${hexColorArray[3].repeat(2)}`;
}

//TODO: Add documentation
export function isHexSixDigits(color: hexColor): boolean {
  return sixDigitHexRegex.test(color);
}

//TODO: Add documentation
export function hexToRGB(color: hexColor): rgbColor {
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

//TODO: Add documentation
export function getFontColor(color: hexColor): hexColor {

  const rgb = hexToRGB(color);

  const { red, green, blue } = rgb;

  const luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;

  if (luminance > 0.5) {
    return '#000000';
  } else {
    return '#FFFFFF';
  }
}