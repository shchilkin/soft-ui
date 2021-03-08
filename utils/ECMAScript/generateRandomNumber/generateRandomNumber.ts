//TODO: Write documentation
export function generateRandomNumber(minimum = 0, maximum = 255): number {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}