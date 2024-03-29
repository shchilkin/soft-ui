import React, { CSSProperties, ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactElement | string,
  onClick: () => void,
  fullWidth?: boolean,
  style?: CSSProperties,
  isActive?: boolean,
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 12pt;
  outline: none;
  width: ${props => props.fullWidth ? '100%' : null};
  background-color: ${props => props.mainColor};
  color: ${props => props.fontColor};

  box-shadow: ${props => props.isActive ? 'inset' : null} ${props => props.darkShadow} 5px 5px 15px 0,
  ${props => props.isActive ? 'inset' : null} ${props => props.lightShadow} -5px -5px 15px 0;

  &:hover {
    background-color: ${props => props.isActive ? null : props.fontColor};
    color: ${props => props.isActive ? null : props.mainColor};
  }

  &:active {
    background-color: ${props => props.mainColor};
    color: ${props => props.fontColor};
    box-shadow: inset ${props => props.darkShadow} 5px 5px 15px 0,
    inset ${props => props.lightShadow} -5px -5px 15px 0;
  }
`;

const Button = (props: ButtonProps): ReactElement => {
  const { children, onClick, fullWidth, style, isActive } = props;

  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();

  return <StyledButton
    isActive={isActive}
    style={style}
    fullWidth={fullWidth}
    mainColor={mainColor}
    fontColor={fontColor}
    darkShadow={darkShadow}
    lightShadow={lightShadow}
    onClick={onClick}>{children}
  </StyledButton>;

};

export default Button;