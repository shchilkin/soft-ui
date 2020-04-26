import React, {useContext} from "react";
import {DefaultButton} from "../../../../StyledComponents";
import ThemeContext from '../../../../contexts/theme/ThemeContext'


const Button = ({children, onClick, state='', style}) => {

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
        <DefaultButton
            radius={borderRadius}
            shadowLength={shadowLength}
            Blur={shadowBlur}
            lighterShadow={lighterShadow}
            darkerShadow={darkerShadow}
            background={mainColor}
            color={font}
            style={{...style}}
            onClick={onClick}
        >
            {children}
        </DefaultButton>)
}

export default Button;