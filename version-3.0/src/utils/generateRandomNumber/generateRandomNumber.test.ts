import { generateRandomNumber } from './generateRandomNumber';

describe('generateRandomNumber function outputs number in the correct range.', () => {

  test('Function works correctly with default arguments: 0/255', () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThan(255);
  });

  test('Function works correctly with custom range: 15/400', () => {
    const lowerBound = 15;
    const upperBound = 400;
    const randomNumber = generateRandomNumber(lowerBound, upperBound);
    expect(randomNumber).toBeGreaterThanOrEqual(lowerBound);
    expect(randomNumber).toBeLessThan(upperBound);
  });

});