import React, {useContext} from "react";
import styled from "styled-components";
import {ComponentShadows} from "../../Classes";
import ThemeContext from "../../contexts/theme/ThemeContext";

const ColorButton = ({color, onClick}) => {

    const componentShadows = new ComponentShadows(color,true,undefined);

    const {colorHEX} = useContext(ThemeContext);

    console.log('COLOR BUTTON', colorHEX, color.replace('#',''))

    const {dark, light} = componentShadows.getShadows();

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
    background-color: ${props => props.color};
    margin: 3px;
    width: 35px;
    height: 35px;
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
    box-shadow: ${props => props.isActive ? `inset 3px 3px 4px 0 ${props.dark},
                 inset -3px -3px 5px 0  ${props.light};` : '3px 3px 4px 0 #D9D9D9, -3px -3px 5px 0  #FFF;'}           
    :active {
        box-shadow: inset 3px 3px 4px 0 ${props => props.dark},
                 inset -3px -3px 5px 0  ${props => props.light};
    }
`;


