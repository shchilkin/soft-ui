import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import { useSoftUIProperties } from '../../store/reducers/softUIPropertiesReducer';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  margin: 10px;
  min-height: 150px;
  background-color: ${props => props.mainColor};
  border-radius: 12px;
  color: ${props => props.fontColor};
  box-shadow: ${props => props.darkShadow} ${props => props.shadowLength}px ${props => props.shadowLength}px ${props => props.shadowBlur}px 0,
  ${props => props.lightShadow} -${props => props.shadowLength}px -${props => props.shadowLength}px ${props => props.shadowBlur}px 0;
`;

const Preview = (): ReactElement => {
  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();
  const { shadowBlur, shadowLength } = useSoftUIProperties();

  return (
    <div id={'Preview'} style={{ padding: '20px' }}>
      <PreviewContainer
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