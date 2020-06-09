import React, {Fragment, useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import {calculateTintAndShades, toHex} from "../../../../Functions";
import Card from "../Layout/Card";
import StagesContext from "../../../../contexts/Stages/StagesContext";

const PreviewStageGenerateCSS = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        colorHEX,
        codeBackgroundColor,
        secondaryColorValue,
        darkModeFactor,
        codeFontColor,} = themeContext;

    const stagesContext = useContext(StagesContext);
    const {generateDarkMode} = stagesContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    const {Red,Green, Blue} = colorRGB;

    const bgDarkmode = calculateTintAndShades(Red,Green,Blue,Math.round(darkModeFactor*100));

    console.log('darkModeFactor',darkModeFactor)

    return (
        <Card>
            <pre
                className={"pt-3 pb-3 pr-1 pl-3"}
                style={{showcaseColor: codeBackgroundColor, borderRadius: "12px",
                    boxShadow: `${codeBackgroundColor} 2px 2px 10px 0px inset,${codeBackgroundColor} -2px -2px 10px 0px inset`,}}
            >
                <code style={{ fontSize: "10px", color: codeFontColor }}>
                :root{'{'}<br/>
                    <span style={{color:'#ed2939'}}>--bg-light:</span> #{colorHEX};<br/>
                    <span style={{color:'#ed2939'}}>--bg-light-shadow:</span> #{toHex(lighterShadows[0])+toHex(lighterShadows[1])+toHex(lighterShadows[2])};<br/>
                    <span style={{color:'#ed2939'}}>--bg-dark-shadow:</span> #{toHex(darkerShadows[0])+toHex(darkerShadows[1])+toHex(darkerShadows[2])};<br/>
                    {generateDarkMode && <Fragment><span style={{color: '#ed2939'}}>--bg--dark:</span> {bgDarkmode};<br/></Fragment>}
                    {generateDarkMode && <Fragment><span style={{color: '#ed2939'}}>--dark-bg-light-shadow:</span>;<br/></Fragment>}
                    {generateDarkMode && <Fragment><span style={{color: '#ed2939'}}>--dark-bg-dark-shadow:</span>;<br/></Fragment>}
                    <span style={{color:'#ed2939'}}>--secondary-color:</span> {secondaryColorValue};
                    <br/>
                    <span style={{color:'#ed2939'}}>--font-color:</span> {font}; <br/>
                {'}'}
                  </code>
                </pre>
        </Card>

    )
}

export default PreviewStageGenerateCSS;
