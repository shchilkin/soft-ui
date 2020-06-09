import React, {useContext} from "react";
import {DefaultButton} from "../../../../StyledComponents";
import ThemeContext from '../../../../contexts/theme/ThemeContext'
import {calculateTintAndShades, hexToRGB} from '../../../../Functions'


const Button = ({children,
                    sameShadowColor = false,
                    onClick,
                    style,
                    background = "#FFF",
                    color,
                    lightShadow,
                    darkShadow}) => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadowBlur,
        shadowLength,
        borderRadius,
    } = themeContext;

    console.log('Is color code RGB', isColorCodeRGB(background))
    console.log("Button BG", background)

    const colors = hexToRGB(background)

    const colorCalculationWrapper = (colorType, percent) => {
        return colorType ?
            calculateTintAndShades(Red, Green, Blue, percent) : calculateTintAndShades(
                colors.Red, colors.Green, colors.Blue, percent)
    }

    const {Red, Green, Blue} = colorRGB;
    // const lighterShadows = shadows.ligherShadowArray;
    // const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    //Calculates shadows of chosen color if sameShadowColor prop is true,
    // otherwise make shadows for white (#FFF)background
    const lighterShadow = sameShadowColor ? colorCalculationWrapper(isColorCodeRGB(background),105) : '#FFF';
    const darkerShadow = sameShadowColor ? colorCalculationWrapper(isColorCodeRGB(background),85) : '#D9D9D9';
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


function isColorCodeRGB(background) {
    //  If string contains RGB => RGB color code, else Hex color code
    //  If background is type Undefined returns string with message

    //  Regular expression below checks appearance of RGB in lower and upper case at the beginning of the string
    let rgbRegex = /(^rgb)|(^RGB)/;

    if ( typeof background !== "undefined") {
        return background.match(rgbRegex) !== null;
    }
    else {
        return "The background color is not specified!"
    }
}