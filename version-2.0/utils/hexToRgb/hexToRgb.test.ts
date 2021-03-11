import hexToRGB from './hexToRgb';

describe('hexToRgb function outputs correct rgb color.', () => {

  test('Function works correctly with random hex color triplet', () => {
    expect(hexToRGB('#ed2939')).toStrictEqual({ red: 237, green: 41, blue: 57 });
  });

  test('Function works correctly with white hex color triplet | 6 Digits', () => {
    expect(hexToRGB('#FFFFFF')).toStrictEqual({ red: 255, green: 255, blue: 255 });
  });

  test('Function works correctly with white hex color triplet | 3 Digits', () => {
    expect(hexToRGB('#FFF')).toStrictEqual({ red: 255, green: 255, blue: 255 });
  });

  test('Function works correctly with black hex color triplet | 6 Digits', () => {
    expect(hexToRGB('#000000')).toStrictEqual({ red: 0, green: 0, blue: 0 });
  });

  test('Function works correctly with white hex color triplet | 3 Digits', () => {
    expect(hexToRGB('#000')).toStrictEqual({ red: 0, green: 0, blue: 0 });
  });

  test('Correclty works with input color without #(hash)', () => {
    expect(hexToRGB('343434')).toStrictEqual({ red: 52, green: 52, blue: 52 });
  });

  test('Throws error if color is not valud', () => {
    const color = 'invalid color';

    expect(() => {
      hexToRGB('invalid color');
    }).toThrow(`Invalid hexadecimal color! Got: ${color}.  Pass a valid hex triplet.`);
  });
});