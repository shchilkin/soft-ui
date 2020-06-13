import React from "react";
import styled from "styled-components";
import {ComponentShadows} from "./Classes";


const Card = ({
                  children,
                  style,
                  type='default',
                  backgroundColor,
                  fontColor,
                  sameColorShadow = false,
                  insetShadow = false,
                  shadowColorBase,
                  borderRadius = 12,
                  shadowLength = 10,
                  shadowBlur = 20
              }) => {

    const componentShadows = new ComponentShadows()

    const setCardType = (type, borderRadius) => {
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

    const {dark, light} = componentShadows.getShadows(backgroundColor, sameColorShadow, shadowColorBase)

    const {topLeft, topRight, bottomLeft, bottomRight} = setCardType(type, borderRadius)

    return (
        <StyledCard
            background={backgroundColor}
            lighterShadow={light}
            darkerShadow={dark}
            color={fontColor}
            paddingTop={'1rem'}
            paddingBottom={'1rem'}
            paddingLeft={'1rem'}
            paddingRight={'1rem'}
            borderRadiusTopLeft={topLeft}
            borderRadiusTopRight={topRight}
            borderRadiusBottomRight={bottomRight}
            borderRadiusBottomLeft={bottomLeft}
            shadowLength={shadowLength}
            shadowBlur={shadowBlur}
            style={{...style}}
        >
            {children}
        </StyledCard>
    )
}

export default Card;

export const StyledCard = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: ${props => props.background};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingRight};
    color: ${props => props.color};
    mix-blend-mode: normal;
    border: 1px solid ${props => props.background};
    border-top-left-radius: ${props => props.borderRadiusTopLeft}px;
    border-top-right-radius: ${props => props.borderRadiusTopRight}px;
    border-bottom-left-radius: ${props => props.borderRadiusBottomLeft}px;
    border-bottom-right-radius: ${props => props.borderRadiusBottomRight}px;
    box-shadow: ${props => props.shadowLength}px ${props => props.shadowLength}px ${props => props.shadowBlur}px 0 ${props => props.darkerShadow},
    -${props => props.shadowLength}px -${props => props.shadowLength}px ${props => props.shadowBlur}px 0 ${props => props.lighterShadow};
`;