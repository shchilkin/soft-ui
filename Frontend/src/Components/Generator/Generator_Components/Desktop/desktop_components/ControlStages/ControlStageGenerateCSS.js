import React, {useContext, useState} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {toHex} from "../../../../../../Functions";

const ControlStageGenerateCSS = () => {
    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        colorHEX,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
        codeFontColor,
        codeBackgroundColor,
    } = themeContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(true);

    return (
        <div
            style={{
                minHeight: "100px",
                backgroundColor: mainColor,
                color: font,
                mixBlendMode: "normal",
                boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                                 -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
                border: `1px solid ${mainColor}`,
                borderRadius: `${borderRadius}px`,
            }}
            className={"pt-3 pb-3 pl-3 pr-3"}
        >
            <div className={'row'}>
                <div className={'col-9'}>
                    <div>
                <pre
                    className={"pt-3 pb-3 pr-1 pl-3"}
                    style={{
                        backgroundColor: codeBackgroundColor,
                        borderRadius: "12px",
                        boxShadow: `${codeBackgroundColor} 2px 2px 10px 0px inset, ${codeBackgroundColor} -2px -2px 10px 0px inset`,
                    }}
                >
                  <code style={{ fontSize: "10px", color: codeFontColor }}>
                    <span style={{ color: "#ed2939" }}>background:</span>{" "}
                      <span style={{ fontWeight: "bold" }}>
                      {colorInputMode
                          ? `#${colorHEX}`
                          : `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`}
                    </span>
                    ;<br />
                    <span style={{ color: "#ed2939" }}>
                      border-radius:
                    </span>{" "}
                      {borderRadius}px;
                    <br />
                    <span style={{ color: "#ed2939" }}>box-shadow:</span>{" "}
                      {shadowLength}px {shadowLength}px {shadowBlur}px 0{" "}
                      <span style={{ fontWeight: "bold" }}>
                      {colorInputMode
                          ? `#${toHex(darkerShadows[0])}${toHex(
                              darkerShadows[1]
                          )}${toHex(darkerShadows[2])}`
                          : `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`}
                    </span>
                    ,
                    <br />
                      {"            "}-{shadowLength}px -{shadowLength}px{" "}
                      {shadowBlur}px 0{" "}
                      <span style={{ fontWeight: "bold" }}>
                      {colorInputMode
                          ? `#${toHex(lighterShadows[0])}${toHex(
                              lighterShadows[1]
                          )}${toHex(lighterShadows[2])}`
                          : `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`}
                    </span>
                    ;
                  </code>
                </pre>
                    </div>
                </div>
                <div className={'col-3'}>
                    <p style={{fontSize:'smaller'}}><input type={'checkbox'}/> Use css variables</p>
                    <br/>
                    <span>Hex </span>
                    <input type={'radio'}/>
                    <br/>
                    <span>RGB </span>
                    <input type={'radio'}/>
                </div>
            </div>
        </div>
    )
}

export default ControlStageGenerateCSS;