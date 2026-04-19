import getShadowColor from './getShadowColor';


describe('generateRandomNumber function outputs number in the correct range.', () => {

  //TODO: Calculate light and dark shadow instead of passing hardcoded values
  test('Function works correctly', () => {
    expect(getShadowColor('#FFFFFF')).toStrictEqual({ lightShadow: '#ffffff', darkShadow: '#d9d9d9' });
  });

});