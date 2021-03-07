import React, { ReactElement, useEffect, useState } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import Input from '../Inputs/TextInput';
import { hexColor } from '../../shared';
import isValidHexColor from '../../utils/ECMAScript/isValidHexColor/isValidHexColor';
import getFontColor from '../../utils/ECMAScript/getFontColor/getFontColor';
import getShadowColor from '../../utils/ECMAScript/getShadowColor/getShadowColor';
import Button from '../Button';
import rgbToHex from '../../utils/ECMAScript/rgbToHex/rgbToHex';
import RangeInput from '../Inputs/RangeInput';
import { useSoftUIProperties } from '../../store/reducers/softUIPropertiesReducer';

const Editor = (): ReactElement => {
  const { mainColor, updateMainColor, updateFontColor, updateDarkShadow, updateLightShadow } = useTheme();
  const { shadowBlur, shadowFactor, updateShadowBlur, updateShadowFactor } = useSoftUIProperties();
  //TODO: Refactor to shorter names
  const [mainColorInputState, setMainColorInputState] = useState<hexColor>(mainColor);
  const [shadowBlurInputState, setShadowBlurInputState] = useState<number>(shadowBlur);
  const [shadowFactorInputState, setFactorInputState] = useState<number>(shadowFactor);

  // update input text if color updated from other source
  useEffect(() => {
    setMainColorInputState(mainColor);
  }, [mainColor]);

  //TODO: Update hex color also in URL
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

  const shadowFactorHandler = (event) => {
    const value = event.target.value;
    updateShadowFactor(value);
    setFactorInputState(value);
  };

  const shadowBlurHandler = (event) => {
    const value = event.target.value;
    updateShadowBlur(value);
    setShadowBlurInputState(value);
  };

  // TODO: Add color picker
  return (
    <div id={'Editor'} style={{ padding: '20px' }}>
      <h2>Pick a color:</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Input value={mainColorInputState} onChange={handleMainColorChange} />
        <Button onClick={generateRandomColor}>Random</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/*TODO: make h2 font regular, value bold*/}
        <h2>TODO Shadow factor / intensity {shadowFactor}%</h2>
        <RangeInput onChange={shadowFactorHandler} value={shadowFactorInputState} min={0} max={100} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/*TODO: make h2 font regular, value bold*/}
        <h2>TODO Shadow blur {shadowBlur}px</h2>
        <RangeInput onChange={shadowBlurHandler} value={shadowBlurInputState} min={0} max={100} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/*TODO: make h2 font regular, value bold*/}
        <h2>TODO Additional color list</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/*TODO: make h2 font regular, value bold*/}
        <h2>TODO css/token output</h2>
      </div>
    </div>
  );
};

export default Editor;