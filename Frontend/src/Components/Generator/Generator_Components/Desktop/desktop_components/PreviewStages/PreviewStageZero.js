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
                        <h3>About this generator:</h3>
                        <p>
                            <ul>
                                <li>Create design elements: cards, buttons, inputs, badges</li>
                                <li>calculate shadows in percentages</li>
                            </ul>
                            Find your perfect option. <br/>
                            Use for your projects for free.<br/>
                            Most advanced open-source CSS code generator <br/> for <span style={{fontWeight:'bold'}}>neumorphism / Soft UI design</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageZero;