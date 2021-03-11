/**
 * Hexadecimal color with either 6 or 3 digits
 * @example \#ED2939 or #FBA
 * */
export type hexColor = string;

//TODO: Add documentation
export const sixDigitHexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

//TODO: Add documentation
export const threeDigitHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

/**
 * Number in range 0 - 255
 * @example 135
 * */
export type rgbValue = number;

/**
 * Object, which contain color information in  RGB format
 * @property {rgbValue} red   -  Red value
 * @property {rgbValue} green -  Green value
 * @property {rgbValue} blue  -  Blue value
 * */
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