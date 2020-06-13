import React from "react";
import styled from "styled-components";


const IconButton = ({title, style, onClick, background, viewBox, path, children, isSVGinChildren = false}) => {

    return(
        <StyledIconButton
            style={style}
            background={background}
            title={title}
            onClick={onClick}>
            {isSVGinChildren ? children : svgWrapper(viewBox, path)}
        </StyledIconButton>
    )
}

export default IconButton;

const svgWrapper = (viewBox, path) => {
    return(
        <svg width="100%"
             height="100%"
             viewBox={viewBox}
             style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
            <path d={path}
                  style={{fill: "#303030"}}/>
        </svg>
    )
};

const StyledIconButton = styled.button`
    width: 38px;
    height: 38px;
    background-color:${props => props.background};
    border: 1px solid ${props => props.background};
    transition: background-color .5s, color .5s;       
    border-radius: 8px;
    box-shadow: 10px 10px 15px 0 #D9D9D9, -10px -10px 15px 0 #FFF;           
    :hover {
       background-color: #f9f9f9;
        border: 1px solid #f9f9f9;
        transition: border-color .1s, color .1s;
    }   
    :active {
        border: 1px solid ${props => props.background};
        box-shadow: inset 10px 10px 15px 0 #D9D9D9,
                    inset -10px -10px 15px 0 #FFF;
        background-color: ${props => props.background};
    }     
    `;