import React, { ReactElement, useState } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import Input from '../Input';
import { hexColor, rgbColor } from '../../shared';
import isValidHexColor from '../../utils/ECMAScript/isValidHexColor/isValidHexColor';
import getFontColor from '../../utils/ECMAScript/getFontColor/getFontColor';
import getShadowColor from '../../utils/ECMAScript/getShadowColor/getShadowColor';
import Button from '../Button';
import { green } from 'colorette';
import rgbToHex from '../../utils/ECMAScript/rgbToHex/rgbToHex';

const Editor = (): ReactElement => {
  const { mainColor, updateMainColor, updateFontColor, updateDarkShadow, updateLightShadow } = useTheme();
  const [mainColorInputState, setMainColorInputState] = useState<hexColor | string>(mainColor);


  const handleMainColorChange = (event) => {
    const color = event.target.value;

    setMainColorInputState(color);

    // Update state if color is valid
    if (isValidHexColor(color)) {
      handleThemeChange(color);
    }
  };

  const handleThemeChange = (color: hexColor) => {
    updateMainColor(color);
    updateFontColor(getFontColor(color));
    updateLightShadow(getShadowColor(color).lightShadow);
    updateDarkShadow(getShadowColor(color).darkShadow);
  };

  //TODO: Write documentation
  function generateRandomNumber(minimum = 0, maximum = 255): number {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  }

  const generateRandomColor = (): void => {

    const randomColor: hexColor = rgbToHex(generateRandomNumber(), generateRandomNumber(), generateRandomNumber());

    handleThemeChange(randomColor);

  };

  // TODO: Add color picker
  return (
    <div id={'Editor'} style={{ padding: '20px' }}>
      <h1>Pick a color:</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Input value={mainColorInputState} onChange={handleMainColorChange} />
        <Button onClick={generateRandomColor}>Random</Button>
      </div>
    </div>
  );
};

export default Editor;