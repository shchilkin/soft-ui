import React from "react";
import {bool, func, node, number, object, oneOfType, string} from 'prop-types';
import styled from "styled-components";
import {ComponentShadows} from "../../Classes";


const Button = ({
                    children,
                    style,
                    isSameShadowColor = false,
                    onClick,
                    backgroundColor,
                    shadowColorBase,
                    borderRadius,
                    fontColor,
                    shadowBlur,
                    shadowLength
                }) => {

    //  Base shadow colors
    const componentBaseShadows = new ComponentShadows(backgroundColor, isSameShadowColor, shadowColorBase);

    const {dark, light} = componentBaseShadows.getShadows()

    //  Main color shadow colors
    const componentMainColorShadows = new ComponentShadows(backgroundColor, true);

    const {dark: mainDark, light: mainLight } = componentMainColorShadows.getShadows()

    return (
        <StyledButton
            backgroundColor={backgroundColor}
            lightShadow={light}
            mainColorLightShadow={mainLight}
            darkShadow={dark}
            mainColorDarkShadow={mainDark}
            color={fontColor}
            radius={borderRadius}
            shadowLength={shadowLength}
            Blur={shadowBlur}
            style={{...style}}
            onClick={onClick}
        >
            {children}
        </StyledButton>)
}

Button.propTypes = {
    children: node,
    style: oneOfType([string, object]),
    isSameShadowColor: bool,
    onClick: func,
    backgroundColor: string,
    fontColor: string,
    shadowColorBase: string,
    borderRadius: oneOfType([string, number]),
    shadowLength: oneOfType([string, number]),
    shadowBlur: oneOfType([string, number])
};

Button.defaultProps = {
    children: 'Button',
    fontColor: "#303030",
    borderRadius: 12,
    onClick: () => console.log('Soft UI Button is pressed'),
    backgroundColor: "#F0F0F0",
    shadowLength: 5,
    shadowBlur: 30
}

export default Button;

const StyledButton = styled.button`
    width: 100%;
    background-color:${props => props.backgroundColor};
    border: 1px solid ${props => props.backgroundColor};
    transition: background-color .5s, color .5s;       
    color:${props => props.color};
    font-weight: bold;
    padding: .375rem .75rem;
    border-radius: ${props => props.radius}px;
    box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkShadow},
          -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lightShadow};           
    :hover {
        background-color: ${props => props.color};
        border: 1px solid ${props => props.color};
        transition: border-color .5s, color .5s;
        color: ${props => props.backgroundColor};
    }   
    :active {
        border: 1px solid ${props => props.backgroundColor};
        box-shadow: inset ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.mainColorDarkShadow},
                    inset -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.mainColorLightShadow};
        background-color: ${props => props.backgroundColor};
        color: ${props => props.color};
    }     
    `;