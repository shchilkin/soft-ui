import { CSSProperties, ReactElement } from 'react';

/**
 * Hexadecimal color with either 6 or 3 digits
 * @example \#ED2939 or #FBA
 * */
export type HexColor = string;

//TODO: Try to fix this range
/**
 * Number in range 0 - 100
 * */
export type Percent = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 |
  34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 |
  52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69
  | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 |
  87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;

//TODO: Add documentation
export const sixDigitHexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

//TODO: Add documentation
export const threeDigitHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

//TODO: Try to fix this range
/**
 * Number in range 0 - 255
 * */
export type RgbValue = number;

/**
 * Object, which contain color information in  RGB format
 * @property {RgbValue} red   -  Red value
 * @property {RgbValue} green -  Green value
 * @property {RgbValue} blue  -  Blue value
 * */
export interface RgbColor {
  red: RgbValue,
  green: RgbValue,
  blue: RgbValue,
}

//TODO: Add documentation
export interface ShadowColors {
  lightShadow: HexColor,
  darkShadow: HexColor,
}

/**
 * Generic DOM Element
 * */
export interface Element {
  children: ReactElement | string
  style: CSSProperties,
}

/**
 * Check is color an rgb object or a hex color triplet string
 * */
export function isRGB(color: RgbColor | HexColor): color is RgbColor {
  return (color as RgbColor).red !== undefined;
}