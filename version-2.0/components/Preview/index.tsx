import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import { useSoftUIProperties } from '../../store/reducers/softUIPropertiesReducer';
import styled from 'styled-components';
import { PreviewState } from '../../store/types/softUIProperties';

const PreviewContainer = styled.div`
  margin: 10px;
  min-height: 150px;
  background-color: ${props => props.mainColor};
  border-radius: 12px;
  color: ${props => props.fontColor};
  box-shadow: ${props => props.isFlat ? '' : 'inset'} ${props => props.darkShadow} ${props => props.shadowLength}px ${props => props.shadowLength}px ${props => props.shadowBlur}px 0,
  ${props => props.isFlat ? '' : 'inset'} ${props => props.lightShadow} -${props => props.shadowLength}px -${props => props.shadowLength}px ${props => props.shadowBlur}px 0;
`;

const Preview = (): ReactElement => {
  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();
  const { shadowBlur, shadowLength, previewState } = useSoftUIProperties();

  return (
    <div id={'Preview'} style={{ padding: '20px' }}>
      <PreviewContainer
        isFlat={PreviewState.Flat === previewState}
        mainColor={mainColor}
        fontColor={fontColor}
        darkShadow={darkShadow}
        lightShadow={lightShadow}
        shadowBlur={shadowBlur}
        shadowLength={shadowLength}
      />
    </div>

  );
};

export default Preview;