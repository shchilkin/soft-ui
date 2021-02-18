import styled from "styled-components";
import React, {useContext} from "react";
import ThemeContext from '../../../../contexts/theme/ThemeContext';


const PreviewButtonRegular = ({
                    children,
                    state,
                    onClick,
                    style,
                    background,
                    color,
                    lightShadow,
                    darkShadow}) => {


    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;


    return (
        <StyledButton
            state={state}
            background={background || mainColor}
            lighterShadow={lightShadow || lighterShadow}
            darkerShadow={darkShadow || darkerShadow}
            color={color || font}
            radius={borderRadius}
            shadowLength={shadowLength}
            Blur={shadowBlur}
            style={{...style}}
            onClick={onClick}
        >
            {children}
        </StyledButton>)
}

export default PreviewButtonRegular;


const handleBackgroundType = (state,backgroundMain,color) => {
    switch (state) {
        case "active":
            return `color: ${color}; background: ${backgroundMain};`;
        case "hover":
            return `color: ${backgroundMain}; background: ${color};`;
        default:
            return `color: ${color}; background: ${backgroundMain};`;
    }
};

const handleShadowType = (state, shadowLength,Blur,darkerShadow,lighterShadow) => {
    switch (state) {
        case "active":
            return `box-shadow: inset ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
          inset -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow};`;
        default:
            return `box-shadow: ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
          -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow};`;
    }
};

const StyledButton = styled.button`
    width: 100%;
    background-color: ${props => props.background};
    border: 1px solid ${props => props.background};
    transition: background-color .5s, color .5s;       
    color:${props => props.color};
    font-weight: bold;
    padding: .375rem .75rem;
    border-radius: ${props => props.radius}px;
    box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
          -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};
    ${({ state,...props }) => handleBackgroundType(state, props.background ,props.color)};
    ${({ state,...props }) => handleShadowType(state, props.shadowLength, props.Blur, props.darkerShadow, props.lighterShadow )};
    `;