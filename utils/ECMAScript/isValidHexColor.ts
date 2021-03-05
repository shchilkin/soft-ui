/**
 * Check is hex color valid
 * @param color {string} a hexadecimal triplet we want to check
 * @returns {boolean} True or False
 * */
export default function isValidHexColor(color: string): boolean {
  const hexRegularExpression = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexRegularExpression.test(color);
}