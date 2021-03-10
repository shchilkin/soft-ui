import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactElement | string,
  onClick: () => void
}

const StyledButton = styled.button`
  background-color: ${props => props.mainColor};
  color: ${props => props.fontColor};
  box-shadow: ${props => props.darkShadow} 5px 5px 15px 0, ${props => props.lightShadow} -5px -5px 15px 0;
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 12pt;
  margin-left: 10px;
  outline: none;

  &:hover {
    background-color: ${props => props.fontColor};
    color: ${props => props.mainColor};
  }

  &:active {
    background-color: ${props => props.mainColor};
    color: ${props => props.fontColor};
    box-shadow: inset ${props => props.darkShadow} 5px 5px 15px 0, inset ${props => props.lightShadow} -5px -5px 15px 0;
  }
`;


const Button = (props: ButtonProps): ReactElement => {
  const { children, onClick } = props;

  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();

  return <StyledButton
    mainColor={mainColor}
    fontColor={fontColor}
    darkShadow={darkShadow}
    lightShadow={lightShadow}
    onClick={onClick}>{children}
  </StyledButton>;

};

export default Button;