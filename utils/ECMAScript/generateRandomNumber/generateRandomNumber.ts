/**
 * Returns a number in range between lower and upper bounds including the bounds numbers
 *
 * @param  {[number]} minimum A lower bound (default: 0)
 * @param  {[number]} maximum An upper bound (default: 255)
 * @return {[number]}         Number in range between lower and upper bounds
 */
export function generateRandomNumber(minimum = 0, maximum = 255): number {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}