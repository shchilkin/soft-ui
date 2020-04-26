import React, {useContext} from "react";
import styled from 'styled-components'
import ThemeContext from "../../../../contexts/theme/ThemeContext";

// excess height to improve interactive area / accessibility
const height = "18px";
const thumbHeight = 12;

const thumbHoverColor = "#FFF"; //FONT
const upperBackground =  "#930035";
const thumbColor = '#FF006C'


const StyledTextInput = styled.input`
        width: 100%;
        height: 50px;
        color: ${props => props.color};
        background-color: ${props => props.background};   
        margin-bottom: 1.25rem;
        border-radius: 12px;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        mix-blend-mode: normal;
        font-weight: bold;
        caretColor: #777B7E;
        box-shadow: inset 2px 2px ${props => props.Blur}px 0 ${props => props.darkerShadow},
         inset -2px -2px ${props => props.Blur}px 0 ${props => props.lighterShadow};
        transition: background-color 0.2s, color 0.2s;
        outline: none;
        :focus {
            box-shadow: 2px 2px ${props => props.Blur}px 0 ${props => props.darkerShadow},
             -2px -2px ${props => props.Blur}px 0 ${props => props.lighterShadow}
        }
    `;
const StyledRangeInput = styled.input`
  overflow: hidden;
  display: inline-block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  border-radius: 12px;
  margin: 0;
  height: ${height};
  cursor: pointer;
  vertical-align: text-bottom;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: #${props => props.background};
    box-shadow: inset 10px 10px ${props => props.Blur}px 0 ${props => props.darkerShadow},
         inset -10px -10px ${props => props.Blur}px 0 ${props => props.lighterShadow};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    // make slider-thumb 174% from main color
    background: ${props => props.font || thumbColor};
    padding: 3px;
    border-radius: 100%;
    border: #FFF;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${upperBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${props => props.font || thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${upperBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${props=> props.font || thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

const Input = ({
                   max,
                   min,
                   step = 1,
                   props,
                   type = 'text',
                   onChange,
                   placeholder,
                   onFocus,
                   onBlur,
                   required = false,
                   name,
                   autoComplete='on',
                   style,
                   value,
                   state=''}) => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorHEX,
        shadowBlur,
    } = themeContext;

    switch (type) {
        case 'range':
            return (
                    <StyledRangeInput type="range"
                           className={'rangeInput'}
                           background={colorHEX}
                           font={font}
                           Blur = {shadowBlur}
                           darkerShadow={props.darkerShadow}
                           lighterShadow={props.lighterShadow}
                           onChange={onChange}
                           max={max}
                           value={value}
                           min={min}
                           step={step}
                    />
            )
        default:
            return (
                <StyledTextInput
                    type={type}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    color={props.font}
                    font={props.font}
                    background={props.mainColor}
                    Blur={props.Blur}
                    darkerShadow={props.darkerShadow}
                    lighterShadow={props.lighterShadow}
                />
            )
    }
}

export default Input;