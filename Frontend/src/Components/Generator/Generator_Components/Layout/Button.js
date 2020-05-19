import React, {useContext} from "react";
import {DefaultButton} from "../../../../StyledComponents";
import ThemeContext from '../../../../contexts/theme/ThemeContext'
import {calculateTintAndShades} from '../../../../Functions'


const Button = ({children,
                    sameShadowColor = false,
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

    // const lighterShadows = shadows.ligherShadowArray;
    // const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    //Calculates shadows of chosen color if sameShadowColor prop is true,
    // otherwise make shadows for white (#FFF)background
    const lighterShadow = sameShadowColor ? calculateTintAndShades(Red,Green,Blue,105) : '#FFF';
    const darkerShadow = sameShadowColor ? calculateTintAndShades(Red,Green,Blue,85) : '#D9D9D9';
    console.log('Background', background)

    return (
        <DefaultButton
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
        </DefaultButton>)
}

export default Button;