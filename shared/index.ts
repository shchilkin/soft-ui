/**
 * Hexadecimal color with either 6 or 3 digits
 * @example \#ED2939 or #FBA
 * */
export type hexColor = string;

//TODO: Add documentation
export const sixDigitHexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

//TODO: Add documentation
export const threeDigitHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

//TODO: Add documentation
export type rgbValue = number;

//TODO: Add documentation
export interface rgbColor {
  red: rgbValue,
  green: rgbValue,
  blue: rgbValue,
}

//TODO: Add documentation
export interface shadowColors {
  lightShadow: hexColor,
  darkShadow: hexColor,
}