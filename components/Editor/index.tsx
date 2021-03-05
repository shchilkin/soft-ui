import React, { ReactElement, useState } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import Input from '../Input';
import { hexColor } from '../../shared';
import isValidHexColor from '../../utils/ECMAScript/isValidHexColor';
import getFontColor from '../../utils/ECMAScript/getFontColor';
import getShadowColor from '../../utils/ECMAScript/getShadowColor';

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

  const handleThemeChange = (color: hexColor): void => {
    updateMainColor(color);
    updateFontColor(getFontColor(color));
    updateLightShadow(getShadowColor(color).lightShadow);
    updateDarkShadow(getShadowColor(color).darkShadow);
  };

  // TODO: Add color picker
  return (
    <div id={'Editor'} style={{ padding: '20px' }}>
      <h1>Editor</h1>
      <span>Pick a color:</span>
      <Input value={mainColorInputState} onChange={handleMainColorChange} />
    </div>
  );
};

export default Editor;