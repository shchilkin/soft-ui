import React, {useContext, useState} from "react";
import styled, {css} from "styled-components";
import ColorShowcaseContext from "../../../../contexts/colorShowcase/ColorShowcaseContext";


const ColorButton = ({
                         mainColor,
                         width = 28,
                         height = 28,
                         borderRadius = 6,
                         blur,
                         shadowLength,
                         darkerShadow,
                         lighterShadow
                     }) => {

    const colorShowcaseContext = useContext(ColorShowcaseContext)
    const { backgroundColor , changeShowcaseColor } = colorShowcaseContext;

    return (
        <StyledColorButton
            onClick={() => changeShowcaseColor(mainColor)}
            active={ backgroundColor === mainColor }
            Background={mainColor}
            background={mainColor}
            width={width}
            height={height}
            radius={borderRadius}
            blur={blur}
            shadowLength={shadowLength}
            darkerShadow={darkerShadow}
            lighterShadow={lighterShadow}
        />
    )
}

export default ColorButton;


const StyledColorButton = styled.button`
    ${props => props.active ? 
    css`
      :focus {
        outline: none;  
        transform: scale(1.2);  
      }
      
        cursor: not-allowed;
        background-color: ${props => props.Background};
        width: ${props => props.width}px;
        height:  ${props => props.height}px;
        border-radius: ${props => props.radius}px;
        display: inline-block;
        margin-right: .35rem;
        margin-left: .35rem; 
        transition:all 1s ease;
        transition: transform 100ms ease;
        border: 0px solid ${props => props.Background};
        transform: scale(1); 
        border: 0px solid ${props => props.background};
        box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.blur}px 0 ${props=> props.darkerShadow} inset,
                   -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.blur}px 0 ${props=> props.lighterShadow} inset;
        background-color: ${props => props.Background};
        color: ${props => props.color};
      ` : 
    css`
    background-color: ${props => props.Background};
    width: ${props => props.width}px;
    height:  ${props => props.height}px;
    border-radius: ${props => props.radius}px;
    display: inline-block; 
    margin-right: .35rem;
    margin-left: .35rem; 
    transition:all 1s ease;
    transform: scale(1); 
    transition: transform 100ms ease;
    border: none;
    
    :hover {
        transform: scale(1.2);
        transition: transform 100ms
        width: ${props => props.width}px;
        height:  ${props => props.height}px;
        background-color: ${props => props.color};
        color: ${props => props.background};
    }   
    :focus {
      outline: none;  
      transform: scale(1.2);  
      }
    :active {
        transform: scale(1); 
        border: 0px solid ${props => props.background};
        box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.blur}px 0 ${props=> props.darkerShadow} inset,
                   -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.blur}px 0 ${props=> props.lighterShadow} inset;
        background-color: ${props => props.Background};
        color: ${props => props.color};
    } 
      `
    }`;