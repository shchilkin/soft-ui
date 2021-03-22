import React, { ReactElement, useEffect, useState } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import Input from '../Inputs/TextInput';
import { HexColor } from '../../shared';
import isValidHexColor from '../../utils/isValidHexColor/isValidHexColor';
import getShadowColor from '../../utils/getShadowColor/getShadowColor';
import Button from '../Button';
import rgbToHex from '../../utils/rgbToHex/rgbToHex';
import RangeInput from '../Inputs/RangeInput';
import { useSoftUIProperties } from '../../store/reducers/softUIPropertiesReducer';
import { generateRandomNumber } from '../../utils/generateRandomNumber/generateRandomNumber';
import styled from 'styled-components';
import FlatIcon from '../Icons/Flat';
import InsetIcon from '../Icons/Inset';
import { FontColorTypeState, PreviewState } from '../../store/types/softUIProperties';
import getFontColor from '../../utils/getFontColor/getFontColor';

const BoldText = styled.span`
  font-weight: 600;
`;

const RegularText = styled.h2`
  font-weight: 400;
`;

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editor = (): ReactElement => {
  const { mainColor, fontColor, updateMainColor, updateFontColor, updateDarkShadow, updateLightShadow } = useTheme();
  const {
    shadowBlur,
    shadowFactor,
    fontColorTypeState,
    shadowLength,
    previewState,
    updateShadowLength,
    updateShadowBlur,
    updatePreviewState,
    updateShadowFactor,
    updateFontColorTypeState
  } = useSoftUIProperties();

  const [mainColorInputState, setMainColorInputState] = useState<HexColor>(mainColor);

  // updates input text if color updated from other source
  useEffect(() => {
    setMainColorInputState(mainColor);
  }, [mainColor]);

  const handleRandomColor = (): void => {
    const randomColor: HexColor = rgbToHex(generateRandomNumber(), generateRandomNumber(), generateRandomNumber());
    handleThemeChange(randomColor);
  };

  const handleMainColorChange = (event) => {
    const color = event.target.value;
    setMainColorInputState(color);

    // Updates state only if color is valid
    if (isValidHexColor(color)) {
      handleThemeChange(color);
      window.history.replaceState('', '', `/${color}`);
    }
  };

  const handleThemeChange = (color: HexColor) => {
    window.history.replaceState('', '', `/${color.toUpperCase()}`);
    updateMainColor(color);
    //TODO: Return dark/light color variation or black/white font color depending on user input
    updateFontColor(getFontColor(color, fontColorTypeState === FontColorTypeState.TintOrShadeOfMainColor));
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

  const handleShadowLength = (event) => {
    const value = event.target.value;
    updateShadowLength(value);
  };

  const handleFlatButton = () => {
    updatePreviewState(PreviewState.Flat);
  };

  const handleInsetButton = () => {
    updatePreviewState(PreviewState.Inset);
  };

  const handleBandWFontButton = () => {
    updateFontColorTypeState(FontColorTypeState.PureBlackOrWhite);
    updateFontColor(getFontColor(mainColor, false));
  };

  const handleShadeOrTintFontButton = () => {
    updateFontColorTypeState(FontColorTypeState.TintOrShadeOfMainColor);
    updateFontColor(getFontColor(mainColor, true));
  };

  // TODO: Add color picker
  return (
    <div id={'Editor'} style={{ padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          isActive={PreviewState.Flat === previewState}
          style={{ marginLeft: 0 }}
          fullWidth onClick={handleFlatButton}><><FlatIcon fillColor={fontColor} />Flat</>
        </Button>
        <Button
          style={{ marginLeft: 10 }}
          isActive={PreviewState.Inset === previewState}
          fullWidth onClick={handleInsetButton
        }><><InsetIcon fillColor={fontColor} />Inset</>
        </Button>
      </div>
      <RegularText>Pick a color:</RegularText>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Input value={mainColorInputState} onChange={handleMainColorChange} />
        <Button style={{ marginLeft: 10 }} fullWidth={false} onClick={handleRandomColor}>Random</Button>
      </div>
      <RegularText>Font color settings:</RegularText>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          isActive={FontColorTypeState.TintOrShadeOfMainColor === fontColorTypeState}
          onClick={handleShadeOrTintFontButton}>Darker shade of main color</Button>
        <Button
          isActive={FontColorTypeState.PureBlackOrWhite === fontColorTypeState}
          style={{ marginLeft: 10 }} onClick={handleBandWFontButton}>Pure black / white</Button>
      </div>
      <FlexboxContainer>
        <RegularText>Shadow intensity: <BoldText>{shadowFactor}%</BoldText></RegularText>
        <RangeInput onChange={handleShadowFactor} value={shadowFactor} min={0} max={100} />
      </FlexboxContainer>
      <FlexboxContainer>
        <RegularText>Shadow blur: <BoldText>{shadowBlur}px</BoldText></RegularText>
        <RangeInput onChange={handleShadowBlur} value={shadowBlur} min={0} max={100} />
      </FlexboxContainer>
      <FlexboxContainer>
        <RegularText>Shadow length: <BoldText>{shadowLength}px</BoldText></RegularText>
        <RangeInput onChange={handleShadowLength} value={shadowLength} min={0} max={100} />
      </FlexboxContainer>
      {/*<FlexboxContainer>*/}
      {/*  <RegularText>TODO Additional color list</RegularText>*/}
      {/*</FlexboxContainer>*/}
    </div>
  );
};

export default Editor;