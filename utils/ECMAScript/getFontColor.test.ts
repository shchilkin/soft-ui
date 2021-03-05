import getFontColor from './getFontColor';

describe('getFontColor outputs correct font colors.',() => {
  test('Function works correctly with bright background', () => {
    expect(getFontColor("#FFF")).toBe('#000000')
  });
});