import React, {useContext} from "react";
import styled from "styled-components";
import {calculateTintAndShades, hexToRGB} from "../../../../../Functions";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";


const TextInput = ({
                       fontColor,
                       type = 'text',
                       backgroundColor,
                       sameColorShadow = false,
                       shadowColorBase,
                       onChange, value, style, placeholder}) => {

    const { colorRGB } = useContext(ThemeContext);

    const {Red,Green,Blue} = colorRGB

    const mainColorShadows = {
        dark: calculateTintAndShades(Red, Green, Blue),
        light: calculateTintAndShades(Red, Green, Blue,105)
    }

    const getShadows = () => {
        console.log('Get Shadows function', sameColorShadow, shadowColorBase)
        if (sameColorShadow){
            return {
                dark: mainColorShadows.dark,
                light: mainColorShadows.light,
            }
        }
        else if (shadowColorBase !== undefined) {
            let {Red:red, Green: green, Blue: blue} = hexToRGB(shadowColorBase)
            return {
                dark: calculateTintAndShades(red, green, blue),
                light: calculateTintAndShades(red, green, blue,105)
            }
        }
        else return {
                dark: calculateTintAndShades(255,255,255),
                light: calculateTintAndShades(255, 255, 255,105)
            }
    }

    const {dark, light} = getShadows();

    console.log("shadows from getShadows", dark,light)

    return (
        <StyledInput
            type={type}
            background={backgroundColor}
            onChange={onChange}
            color={fontColor}
            value={value}
            style={style}
            placeholder={placeholder}
            lighterShadow = {light}
            darkerShadow={dark}
            Blur ={20}
            innerLightShadow={mainColorShadows.light}
            innerDarkShadow={mainColorShadows.dark}
        />)
}

export default TextInput;


const StyledInput = styled.input`
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
        caret-color: ${props => props.color};
        box-shadow: inset 2px 2px ${props => props.Blur}px 0 ${props => props.innerDarkShadow},
         inset -2px -2px ${props => props.Blur}px 0 ${props => props.innerLightShadow};
        transition: background-color 0.2s, color 0.2s;
        outline: none;
        :focus {
            box-shadow: 2px 2px ${props => props.Blur}px 0 ${props => props.darkerShadow},
             -2px -2px ${props => props.Blur}px 0 ${props => props.lighterShadow}
        }
`;