import React, {useContext} from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import ThemeContext from "../../contexts/theme/ThemeContext";

const NavigationBar = () => {
    const themeContext =  useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows
    } = themeContext;
    console.log(font)
    return (
        <Navbar style={{backgroundColor:`rgb(${colorRGB.Red},${colorRGB.Green},${colorRGB.Blue}`,
            boxShadow:'0 2px 4px rgba(0, 0, 0, 0.2)'}} expand="lg"
                className={`navbar-light Navbar-"Light`}
        >
            <Navbar.Brand>
                <svg width="32px" height="32px" viewBox="0 0 172 172" style={{fillRule:"evenodd",clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
                    <path id="DarkerShadow" d="M171.505,59.751c0,-20.559 -16.692,-37.251 -37.251,-37.251l-74.503,0c-20.559,0 -37.251,16.692 -37.251,37.251l0,74.503c0,20.559 16.692,37.251 37.251,37.251l74.503,0c20.559,0 37.251,-16.692 37.251,-37.251l0,-74.503Z" style={{fill: `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`}}/>
                    <path id="Main" d="M149.005,37.251c0,-20.559 -16.692,-37.251 -37.251,-37.251l-74.503,0c-20.559,0 -37.251,16.692 -37.251,37.251l0,74.503c0,20.559 16.692,37.251 37.251,37.251l74.503,0c20.559,0 37.251,-16.692 37.251,-37.251l0,-74.503Z" style={{fill: `rgb(${shadows.ligherShadowArray[0]},${shadows.ligherShadowArray[1]},${shadows.ligherShadowArray[2]})`}} />
                    <path id="LighterShadow" d="M160.24,48.474c0,-20.56 -16.692,-37.251 -37.251,-37.251l-74.502,0c-20.56,0 -37.252,16.691 -37.252,37.251l0,74.502c0,20.56 16.692,37.251 37.252,37.251l74.502,0c20.559,0 37.251,-16.691 37.251,-37.251l0,-74.502Z" style={{fill: `rgb(${colorRGB.Red},${colorRGB.Green},${colorRGB.Blue})`}}/>
                </svg>
                {'  '}
                <span style={{color: font, verticalAlign:'bottom'}}>Soft UI</span>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar;