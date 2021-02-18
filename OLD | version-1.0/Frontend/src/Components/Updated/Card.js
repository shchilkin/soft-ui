import React from "react";
import styled from "styled-components";
import {ComponentShadows} from "../../Classes";
import PropTypes, {bool, node, number, object, oneOfType, string} from 'prop-types';


const Card = ({
                  children,
                  style,
                  type,
                  backgroundColor,
                  fontColor,
                  isSameColorShadow,
                  isInsetShadow,
                  shadowColorBase,
                  borderRadius,
                  shadowLength,
                  shadowBlur,
                  id,
                  darkShadowFactor,
                  lightShadowFactor
              }) => {

    console.log('Shadow Factors',lightShadowFactor, darkShadowFactor)

    const componentShadows = new ComponentShadows(backgroundColor, isSameColorShadow, shadowColorBase,
        darkShadowFactor, lightShadowFactor);

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

    const {dark, light} = componentShadows.getShadows()

    console.log('Dark, light Shadows',dark, light)

    const {topLeft, topRight, bottomLeft, bottomRight} = setCardType(type, borderRadius)

    return (
        <StyledCard
            id={id}
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
            isInsetShadow={isInsetShadow}
        >
            {children}
        </StyledCard>
    )
}

Card.propTypes = {
    children: node,
    style: oneOfType([string, object]),
    type: string,
    backgroundColor: string,
    fontColor: string,
    isSameColorShadow: bool,
    isInsetShadow: bool,
    shadowColorBase: string,
    borderRadius: PropTypes.oneOfType([string, number]),
    shadowLength: PropTypes.oneOfType([string, number]),
    shadowBlur: PropTypes.oneOfType([string, number])
};

Card.defaultProps = {
    children: null,
    style: null,
    type: 'default',
    backgroundColor:"#F0F0F0",
    fontColor: "#000",
    isSameColorShadow: false,
    isInsetShadow: false,
    shadowColorBase: undefined,
    borderRadius: 12,
    shadowLength: 5,
    shadowBlur: 20,
    lightShadowFactor: 105,
    darkShadowFactor: 85,
};

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
    box-shadow: ${ props => props.isInsetShadow ?
    `inset ${props.shadowLength}px ${props.shadowLength}px ${props.shadowBlur}px 0 ${props.darkerShadow},
     inset -${props.shadowLength}px -${props.shadowLength}px ${props.shadowBlur}px 0 ${props.lighterShadow}`
    :
    `${props.shadowLength}px ${props.shadowLength}px ${props.shadowBlur}px 0 ${props.darkerShadow},
    -${props.shadowLength}px -${props.shadowLength}px ${props.shadowBlur}px 0 ${props.lighterShadow}`
};
`;




