import React, {useContext} from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import ThemeContext from "../../contexts/theme/ThemeContext";
import styled from "styled-components";
import {calculateTintAndShades} from "../Generator/Functions.SoftUIGenerator";

const NavigationBar = () => {
    const themeContext =  useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        borderRadius
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    // TODO move badge to the separate file and import if needed (Usage of the same badge in multiple files)
    const Badge = styled.span`
     padding: 5px 4px;
     background-color: ${calculateTintAndShades(Red, Green, Blue, 95,"hex")};
     border-radius:${Math.round(borderRadius/2)}px;
     vertical-align: bottom;
     color: ${font};
    `;

    const viewportWidth = window.innerWidth
    function getVersion(width) {
        if(viewportWidth <= 500){
            return "Mobile"
        }
        else return "Desktop"
    }

    return (
        <Navbar style={{backgroundColor:`rgb(${Red},${Green},${Blue}`,
            boxShadow:`0 2px 4px rgba(${shadows.darkerShadowArray[0]}, ${shadows.darkerShadowArray[1]}, ${shadows.darkerShadowArray[2]}, 1)`}} expand="lg"
                className={`navbar-light Navbar-"Light`}
        >
            <Navbar.Brand>
                <svg width="32px" height="32px" viewBox="0 0 172 172" style={{fillRule:"evenodd",clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
                    <path id="DarkerShadow" d="M171.505,59.751c0,-20.559 -16.692,-37.251 -37.251,-37.251l-74.503,0c-20.559,0 -37.251,16.692 -37.251,37.251l0,74.503c0,20.559 16.692,37.251 37.251,37.251l74.503,0c20.559,0 37.251,-16.692 37.251,-37.251l0,-74.503Z" style={{fill: `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`}}/>
                    <path id="Main" d="M149.005,37.251c0,-20.559 -16.692,-37.251 -37.251,-37.251l-74.503,0c-20.559,0 -37.251,16.692 -37.251,37.251l0,74.503c0,20.559 16.692,37.251 37.251,37.251l74.503,0c20.559,0 37.251,-16.692 37.251,-37.251l0,-74.503Z" style={{fill: `rgb(${shadows.ligherShadowArray[0]},${shadows.ligherShadowArray[1]},${shadows.ligherShadowArray[2]})`}} />
                    <path id="LighterShadow" d="M160.24,48.474c0,-20.56 -16.692,-37.251 -37.251,-37.251l-74.502,0c-20.56,0 -37.252,16.691 -37.252,37.251l0,74.502c0,20.56 16.692,37.251 37.252,37.251l74.502,0c20.559,0 37.251,-16.691 37.251,-37.251l0,-74.502Z" style={{fill: `rgb(${colorRGB.Red},${colorRGB.Green},${colorRGB.Blue})`}}/>
                </svg>
                {'  '}
                <span style={{color: font, verticalAlign:'bottom'}}>Soft UI</span>{" "}
                <Badge>{getVersion(viewportWidth)}</Badge>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar;