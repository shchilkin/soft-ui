import React from "react";
import Icons from "../Icons";
import styled from "styled-components";

const IconButton = ({background,radius, svgColor,darkerShadow,lighterShadow, Blur, shadowLength,icon, color, width = '2rem', height = '2rem'})  => {

    return (
        <StyledIconButton
            svgColor={svgColor}
            Blur={Blur}
            darkerShadow={darkerShadow}
            lighterShadow={lighterShadow}
            shadowLength={shadowLength}
            color={color}
            background={background}
            radius={radius}
        >
                {Icons[icon].group ? (
                    <svg
                        fill={svgColor}
                        height={'100%'}
                        width={'100%'}
                        viewBox={Icons[icon].viewBox}
                    >
                        <g>
                            {Icons[icon].group.map( Path => <path d={Path} /> )}
                        </g>
                    </svg>
                ) : (
                    <svg
                        fill={svgColor}
                        height={'100%'}
                        width={'100%'}
                        viewBox={Icons[icon].viewBox}
                    >
                        <path d={Icons[icon].path}/>
                    </svg>
                )}
        </StyledIconButton>
    )
};

export default IconButton;

const StyledIconButton = styled.button`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color:${props => props.background};
    border: 1px solid ${props => props.background};
    transition: background-color .5s, color .5s;       
    color:${props => props.color};
    font-weight: bold;
    border-radius: ${props => props.radius}px;
    box-shadow: ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
          -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};           
    :hover {
        background-color: ${props => props.color};
        border: 1px solid ${props => props.color};
        transition: border-color .5s, color .5s;
        color: ${props => props.background};
    }   
    :active {
        border: 1px solid ${props => props.background};
        box-shadow: inset ${props=> props.shadowLength}px ${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.darkerShadow},
                    inset -${props=> props.shadowLength}px -${props=> props.shadowLength}px ${props=> props.Blur}px 0 ${props=> props.lighterShadow};
        background-color: ${props => props.background};
        color: ${props => props.color};
    }     
    `;