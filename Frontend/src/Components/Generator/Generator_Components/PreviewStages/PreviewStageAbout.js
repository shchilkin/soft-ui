import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import {StyledCard} from "../../../../StyledComponents";
import {calculateTintAndShades,toHex} from "../../../../Functions";
import Card from "../Layout/Card";

const PreviewStageAbout = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,} = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const HEX = `${toHex(Red)}${toHex(Green)}${toHex(Blue)}`;
    const lightShadowForSVG =() => {
        if (HEX === "FFFFFF"){
            return calculateTintAndShades(Red,Green,Blue,95)
        }
        else {
            return `#${toHex(lighterShadows[0])}${toHex(lighterShadows[1])}${toHex(lighterShadows[2])}`;
        }
    }

    return (
        <div>
            <div className={"row mb-3"}>
                <div className={"col-12"}>
                    <Card
                        type={'top'}
                    >
                        <svg width="25%" height="25%" viewBox="0 0 222 222" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
                            <path id="Main" d="M221.978,55.495c0,-30.629 -24.866,-55.495 -55.494,-55.495l-110.989,0c-30.629,0 -55.495,24.866 -55.495,55.495l0,110.989c0,30.628 24.866,55.494 55.495,55.494l110.989,0c30.628,0 55.494,-24.866 55.494,-55.494l0,-110.989Z"
                                  style={{fill:`#${toHex(Red)}${toHex(Green)}${toHex(Blue)}`}}/>
                            <path id="BottomShadow" d="M180.615,53.184c10.358,6.677 17.222,18.316 17.222,31.547l0,75.016c0,20.702 -16.806,37.509 -37.508,37.509l-75.017,0c-13.216,0 -24.844,-6.85 -31.525,-17.189c5.851,3.772 12.815,5.961 20.286,5.961l75.017,0c20.701,0 37.508,-16.807 37.508,-37.508l0,-75.017c0,-7.486 -2.198,-14.462 -5.983,-20.319Z"
                                  style={{fill:`#${toHex(darkerShadows[0])}${toHex(darkerShadows[1])}${toHex(darkerShadows[2])}`}}/>
                            <path id="TopShadow" d="M169.389,82.107c0,-15.952 -12.951,-28.903 -28.904,-28.903l-57.808,0c-15.952,0 -28.903,12.951 -28.903,28.903l0,57.808c0,15.953 12.951,28.904 28.903,28.904l57.808,0c15.953,0 28.904,-12.951 28.904,-28.904l0,-57.808Zm-126.876,86.679c-10.351,-6.68 -17.209,-18.314 -17.209,-31.539l0,-75.016c0,-20.702 16.807,-37.509 37.508,-37.509l75.017,0c13.239,0 24.885,6.874 31.56,17.242c-5.853,-3.777 -12.822,-5.969 -20.299,-5.969l-75.017,0c-20.702,0 -37.509,16.806 -37.509,37.508l0,75.017c0,7.463 2.185,14.419 5.949,20.266Z"
                                  style={{fill:lightShadowForSVG()}}/>
                        </svg>
                    </Card>
                    <Card
                        type={'bottom'}
                    >
                        <h5>Create design elements: badges, inputs, cards.</h5>
                        <h6 style={{fontSize:'0.9rem',marginBottom:'1.2rem'}}>Most advanced open-source CSS code generator for neumorphism / Soft UI design</h6>
                        <div style={{fontSize:'.875rem'}}>
                            Calculate shadows in percentages, find your perfect option!
                            Use for your projects for free.
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageAbout;