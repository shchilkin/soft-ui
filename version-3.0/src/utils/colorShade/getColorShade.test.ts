import getColorShade from './getColorShade';

describe('getColorShade Correctly generates shades', () => {
  test('Correctly works with white color', () => {
      expect(getColorShade({ red: 255, green: 255, blue: 255 }, 90))
        .toStrictEqual({ red: 230, green: 230, blue: 230 });
    }
  );

  test('Correctly works with no percent argument', () => {
      expect(getColorShade({ red: 255, green: 255, blue: 255 }))
        .toStrictEqual({ red: 255, green: 255, blue: 255 });
    }
  );
});