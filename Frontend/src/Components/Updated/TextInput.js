import React, {useContext} from "react";
import styled from "styled-components";
import { getTintsAndShades } from 'color-processing-library'
import ThemeContext from "../../contexts/theme/ThemeContext";
import { ComponentShadows } from '../../Classes'


const TextInput = ({
                       fontColor,
                       type = 'text',
                       backgroundColor,
                       sameColorShadow = false,
                       shadowColorBase,
                       onChange, value, style, placeholder}) => {

    const componentShadows = new ComponentShadows(backgroundColor, sameColorShadow, shadowColorBase)

    const { colorRGB } = useContext(ThemeContext);

    const {Red,Green,Blue} = colorRGB

    const mainColorShadows = {
        dark: getTintsAndShades(Red, Green, Blue),
        light: getTintsAndShades(Red, Green, Blue,105)
    }

    const {dark, light} = componentShadows.getShadows()

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