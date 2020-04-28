import React, {useContext} from "react";
import {StyledCard} from "../../../../StyledComponents";
import ThemeContext from "../../../../contexts/theme/ThemeContext";


const Card = ({
                  children,
                  style,
                  type='default',
                  background,
                  color,
                  lightShadow,
                  darkShadow
              }) => {

    const setCardType = (type) => {
        switch (type) {
            case "top":
                return {
                    topLeft:borderRadius,
                    topRight:borderRadius,
                    bottomLeft:0,
                    bottomRight:0,
                }
            case "middle":
                return {
                    topLeft:0,
                    topRight:0,
                    bottomLeft:0,
                    bottomRight:0
                }
            case "bottom":
                return {
                    topLeft:0,
                    topRight:0,
                    bottomLeft:borderRadius,
                    bottomRight:borderRadius,
                }
            case "left":
                return {
                    topLeft:borderRadius,
                    topRight:0,
                    bottomLeft:borderRadius,
                    bottomRight:0,
                }
            case "right":
                return {
                    topLeft:0,
                    topRight:borderRadius,
                    bottomLeft:0,
                    bottomRight:borderRadius,
                }
            case "default":
                return {
                    topLeft:borderRadius,
                    topRight:borderRadius,
                    bottomLeft:borderRadius,
                    bottomRight:borderRadius,
                }
        }
    }

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
    } = themeContext;

    const {topLeft, topRight, bottomLeft, bottomRight} = setCardType(type)

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    return (
        <StyledCard
            background={background || mainColor}
            lighterShadow={lightShadow || lighterShadow}
            darkerShadow={darkShadow || darkerShadow}
            color={color || font}
            paddingTop={'1rem'}
            paddingBottom={'1rem'}
            paddingLeft={'1rem'}
            paddingRight={'1rem'}
            borderRadiusTopLeft={topLeft}
            borderRadiusTopRight={topRight}
            borderRadiusBottomRight={bottomRight}
            borderRadiusBottomLeft={bottomLeft}
            shadowLengthBottomX={shadowLength}
            shadowLengthBottomY={shadowLength}
            shadowLengthTopX={shadowLength}
            shadowLengthTopY={shadowLength}
            shadowBlur={shadowBlur}
            style={{...style}}
        >
            {children}
        </StyledCard>
    )
}

export default Card;