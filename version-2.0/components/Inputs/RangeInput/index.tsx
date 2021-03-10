import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../store/reducers/themeReducer';

const StyledRangeInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 25px;
  background-color: ${props => props.background};
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 12px;
  //TODO: decide is range input flat or neumorphic 
  box-shadow: inset ${props => props.background} 5px 5px 10px 0, inset ${props => props.accent} -5px -5px 10px 0;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    background: ${props => props.accent};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    border: none;
    border-radius: 100%;
    padding: 5px;
    width: 25px;
    height: 25px;
    background: ${props => props.accent};
    cursor: pointer;
  }
`;

interface RangeInputProps {
  min: number | string,
  max: number | string,
  value: number | string,
  onChange: (event: Event) => void,
}

const RangeInput = (props: RangeInputProps): ReactElement => {
  const { min, max, value, onChange } = props;
  const { darkShadow, lightShadow } = useTheme();
  return <StyledRangeInput
    min={min}
    max={max}
    onChange={onChange}
    value={value}
    accent={lightShadow}
    background={darkShadow}
    type={'range'} />;
};

export default RangeInput;