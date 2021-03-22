import getFontColor from './getFontColor';

describe('getFontColor outputs correct font colors.', () => {

  test('Function works correctly with bright background without fontColorReturnMode argument', () => {
    expect(getFontColor('#FFF')).toBe('#000000');
  });

  test('Function works correctly with dark background without fontColorReturnMode argument', () => {
    expect(getFontColor('#000')).toBe('#FFFFFF');
  });

  test('Function works correctly with light background with return mode set as primary color variation ', () => {
    expect(getFontColor('#ed2939', true)).toBe('#fdeaeb');
  });

  test('Function works correctly with dark background with return mode set as primary color variation ', () => {
    expect(getFontColor('#5096b1', true)).toBe('#080f12');
  });

  test('Throws error if color is invalid', () => {
    const invalidColor = 'invalid color';
    expect(() => {
      getFontColor('invalid Color');
    }).toThrow(`Invalid hex color. Got: ${invalidColor.toUpperCase()}. Pass a valid hex triplet`);
  });

});