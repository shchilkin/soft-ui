import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";

const PreviewStageZero = () => {

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

    const containerStyle = {
        width: "100%",
        minHeight: "100px",
        backgroundColor: mainColor,
        padding:'1rem',
        color: font,
        mixBlendMode: "normal",
        boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
        border: `1px solid ${mainColor}`,
        borderRadius: `${borderRadius}px`,
    };

    return (
        <div>
            <div className={"row mb-3"}>
                <div className={"col-12"}>
                    <div className={"align-self-center"} style={containerStyle}>
                        <p>
                            <h5>Create design elements: badges, inputs, cards.</h5>
                            <ul>
                                <li>Calculate shadows in percentages, find your perfect option!</li>
                                <li>Use for your projects for free</li>
                            </ul>
                            <h6>Most advanced open-source CSS code generator for neumorphism / Soft UI design</h6>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageZero;