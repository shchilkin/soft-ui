import React, { ReactElement } from 'react';
import { Element } from '../../shared';
import styled from 'styled-components';
import { useTheme } from '../../store/reducers/themeReducer';
import { useSoftUIProperties } from '../../store/reducers/softUIPropertiesReducer';

export interface SoftContainerProps extends Element {
  inset?: boolean
}

const StyledContainer = styled.div`
  margin: 10px;
  background-color: ${props => props.mainColor};
  border-radius: 12px;
  color: ${props => props.fontColor};
  box-shadow: ${props => props.inset ? 'inset' : ''} ${props => props.darkShadow} ${props => props.shadowLength}px ${props => props.shadowLength}px ${props => props.shadowBlur}px 0,
  ${props => props.inset ? 'inset' : ''} ${props => props.lightShadow} -${props => props.shadowLength}px -${props => props.shadowLength}px ${props => props.shadowBlur}px 0;
`;

const SoftContainer = (softContainerProps: SoftContainerProps): ReactElement => {
  const { children, style, inset } = softContainerProps;
  const { fontColor, mainColor, lightShadow, darkShadow } = useTheme();
  const { shadowLength, shadowBlur } = useSoftUIProperties();

  return <StyledContainer
    inset={inset}
    fontColor={fontColor}
    mainColor={mainColor}
    lightShadow={lightShadow}
    darkShadow={darkShadow}
    shadowLength={shadowLength}
    shadowBlur={shadowBlur}
    style={style}
  >{children}</StyledContainer>;
};

export default SoftContainer;