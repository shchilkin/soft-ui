import React, { ReactElement, useState } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import Input from '../Input';
import { hexColor } from '../../shared';
import { getFontColor, isValidHexColor } from '../../utils/ECMAScript';

const Editor = (): ReactElement => {
  const { mainColor, updateMainColor, updateFontColor } = useTheme();
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
    // TODO:  Update shadow values
    // updateLightShadow();
    // updateDarkShadow();
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