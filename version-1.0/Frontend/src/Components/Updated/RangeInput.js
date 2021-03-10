import React from "react";
import styled from "styled-components";
import { object, oneOfType, string, number } from 'prop-types';
import { ComponentShadows } from '../../Classes'



const RangeInput = ({ style, backgroundColor, height, thumbHeight, thumbColor, upperBackground,thumbHoverColor,
                        shadowBlur, borderRadius }) => {
    const componentShadows= new ComponentShadows(backgroundColor, false, '#606060');

    const { dark, light } = componentShadows.getShadows();
    console.log('ComponentShadows in RangeInput', componentShadows, dark, light)

    return <StyledRangeInput
        style={{style}}
        backgroundColor={backgroundColor}
        upperBackground={backgroundColor}
        type={'range'}
        height={height}
        thumbHeight={thumbHeight}
        thumbColor={thumbColor}
        thumbHoverColor={thumbHoverColor}
        darkShadow={dark}
        lightShadow={light}
        borderRadius={borderRadius}
        Blur={shadowBlur}
    />
}

RangeInput.propTypes = {
    style: oneOfType([string, object]),
    backgroundColor: string,
    height: number,
    thumbHeight: number,
    thumbColor: string,
    upperBackground: string,
    thumbHoverColor: string,
    borderRadius: number,
    shadowBlur: number
}

RangeInput.defaultProps = {
    height: 30,
    shadowBlur: 30,
    thumbHeight: 25,
    thumbColor:'#F0F0F0',
    backgroundColor:'#606060',
    upperBackground:'#ffffaa',
    thumbHoverColor:'#FAB',
    borderRadius: 12
}

export default RangeInput;


const StyledRangeInput = styled.input`
  overflow: hidden;
  display: inline-block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  border-radius: ${props => props.borderRadius}px;
  margin: 0;
  height: ${props => props.height}px;
  cursor: pointer;
  vertical-align: text-bottom;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${props => props.height}px;
    background: ${props => props.backgroundColor};
    box-shadow: inset 10px 10px ${props => props.Blur}px 0 ${props => props.darkShadow},
         inset -10px -10px ${props => props.Blur}px 0 ${props => props.lightShadow};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${props => props.thumbHeight}px;
    width: ${props => props.thumbHeight}px;
    // make slider-thumb 174% from main color
    background: ${props => props.font || props.thumbColor};
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
    height: ${props => props.height}px;
    background: ${props => props.upperBackground};
    box-shadow: inset 10px 10px ${props => props.Blur}px 0 ${props => props.darkShadow},
     inset -10px -10px ${props => props.Blur}px 0 ${props => props.lightShadow};
  }

  &::-moz-range-progress {
    background: ${props => props.upperBackground};
    box-shadow: inset 10px 10px ${props => props.Blur}px 0 ${props => props.darkShadow},
     inset -10px -10px ${props => props.Blur}px 0 ${props => props.lightShadow};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${props => props.thumbHeight}px;
    width: ${props => props.thumbHeight}px;
    background: ${props => props.font || props.thumbColor}px;
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${props => props.height}px;
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${props => props.upperBackground};
  }

  &::-ms-fill-upper {
    background: ${props => props.upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${props => props.thumbHeight}px;
    width: ${props => props.thumbHeight}px;
    background: ${props=> props.font || props.thumbColor}px;
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
      background-color: ${props => props.thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${props => props.thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${props => props.thumbHoverColor};
    }
  }
`;