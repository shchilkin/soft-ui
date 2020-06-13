import React, {useContext} from "react";
import styled from "styled-components";
import {ComponentShadows} from "../../Classes";
import ThemeContext from "../../contexts/theme/ThemeContext";

const ColorButton = ({color, onClick}) => {

    const componentShadows = new ComponentShadows();

    const {colorHEX} = useContext(ThemeContext);

    console.log('COLOR BUTTON', colorHEX, color.replace('#',''))

    const {dark, light} = componentShadows.getShadows(color,true,undefined);

    console.log(color.replace('#', '') === colorHEX)
    return(
        <StyledColorButton
            isActive={color.replace('#', '') === colorHEX}
            onClick={onClick}
            color={color}
            dark={dark}
            light={light}
        />
    )
}

export default ColorButton;

const StyledColorButton = styled.button`
    border-radius: 6px;
    border: 1px solid ${props => props.color};
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: ${props => props.color};
    width: 38px;
    height: 38px;
    box-shadow: ${props => props.isActive ? `inset 3px 3px 4px 0 ${props.dark},
                 inset -3px -3px 5px 0  ${props.light};` : '3px 3px 4px 0 #D9D9D9, -3px -3px 5px 0  #FFF;'}           
    :active {
        box-shadow: inset 3px 3px 4px 0 ${props => props.dark},
                 inset -3px -3px 5px 0  ${props => props.light};
    }
`;


