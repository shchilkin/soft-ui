import getFontColor from './getFontColor';

describe('getFontColor outputs correct font colors.', () => {

  test('Function works correctly with bright background', () => {
    expect(getFontColor('#FFF')).toBe('#000000');
  });

  test('Function works correctly with dark background', () => {
    expect(getFontColor('#000')).toBe('#FFFFFF');
  });

  //TODO: Test error

  // test('Throws error if color is invalid', () => {
  //   const invalidColor = 'invalid color';
  //   try {
  //     getFontColor('invalid Color');
  //   } catch (error) {
  //     expect(error.message).toBe(`Invalid hex color. Got: ${invalidColor}`)
  //   }
  // });

});