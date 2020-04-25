import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Button from "../../../Layout/Button";
import Input from "../../../Layout/Input";
import {generateTintAndShades} from "../../../../../../Functions";

const PreviewStageFive = () => {

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
    console.log('colors',generateTintAndShades(Red,Green,Blue))
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const viewportWidth = window.innerWidth
    function getContainerHeight(viewportWidth) {
        if(viewportWidth < 500){
            return 175
        } else return 300
    }

    const containerStyle = {
        width: "100%",
        height: `${getContainerHeight(viewportWidth)}px`,
        minHeight: "100px",
        backgroundColor: mainColor,
        color: font,
        mixBlendMode: "normal",
        boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
        border: `1px solid ${mainColor}`,
        borderRadius: `${borderRadius}px`,
    };

    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return (
        <div>
            <div className={"row mb-3"}>
                <div className={"col-12"}>
                    <div className={"align-self-center"} style={containerStyle}/>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageFive;
