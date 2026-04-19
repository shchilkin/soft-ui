import { RgbColor } from '../../shared';

/**
 * Color luminance formula
 *
 * if it is greater than 0.5 - color is light,
 * otherwise it is dark
 *
 * @param {[RgbColor]} color RGB Color Object
 * @returns {[number]} Color luminance value in range between 0 and 1
 * */
export default function getLuminance(color: RgbColor): number {
  const { red, green, blue } = color;

  return ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 255;
}