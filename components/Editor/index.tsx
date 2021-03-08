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
import { generateRandomNumber } from '../../utils/ECMAScript/generateRandomNumber/generateRandomNumber';

const Editor = (): ReactElement => {
  const { mainColor, updateMainColor, updateFontColor, updateDarkShadow, updateLightShadow } = useTheme();
  const { shadowBlur, shadowFactor, updateShadowBlur, updateShadowFactor } = useSoftUIProperties();
  //TODO: Refactor to shorter names
  const [mainColorInputState, setMainColorInputState] = useState<hexColor>(mainColor);

  // updates input text if color updated from other source
  useEffect(() => {
    setMainColorInputState(mainColor);
  }, [mainColor]);

  const handleRandomColor = (): void => {
    const randomColor: hexColor = rgbToHex(generateRandomNumber(), generateRandomNumber(), generateRandomNumber());
    handleThemeChange(randomColor);
  };

  const handleMainColorChange = (event) => {
    const color = event.target.value;
    setMainColorInputState(color);

    // Update state if color is valid
    if (isValidHexColor(color)) {
      handleThemeChange(color);
      window.history.replaceState('', '', `/${color}`);
    }
  };

  const handleThemeChange = (color: hexColor) => {
    updateMainColor(color);
    updateFontColor(getFontColor(color));
    updateLightShadow(getShadowColor(color, shadowFactor).lightShadow);
    updateDarkShadow(getShadowColor(color, shadowFactor).darkShadow);
  };

  const handleShadowFactor = (event) => {
    const value = event.target.value;
    updateShadowFactor(value);
    updateLightShadow(getShadowColor(mainColor, value).lightShadow);
    updateDarkShadow(getShadowColor(mainColor, value).darkShadow);
  };

  const handleShadowBlur = (event) => {
    const value = event.target.value;
    updateShadowBlur(value);
  };

  // TODO: Add color picker
  return (
    <div id={'Editor'} style={{ padding: '20px' }}>
      <h2>Pick a color:</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Input value={mainColorInputState} onChange={handleMainColorChange} />
        <Button onClick={handleRandomColor}>Random</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/*TODO: make h2 font regular, value bold*/}
        <h2>Shadow intensity {shadowFactor}%</h2>
        <RangeInput onChange={handleShadowFactor} value={shadowFactor} min={0} max={100} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/*TODO: make h2 font regular, value bold*/}
        <h2>Shadow blur <span>{shadowBlur}px</span></h2>
        <RangeInput onChange={handleShadowBlur} value={shadowBlur} min={0} max={100} />
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