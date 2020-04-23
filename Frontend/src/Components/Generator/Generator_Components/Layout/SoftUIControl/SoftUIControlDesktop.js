import ColorPickerSketch from "../../colorPickerSketch";
import SoftUIGenButton from "../SoftUIGenButton";
import Badge from "../../../../Badge/Badge.component";
import SoftUIGenInput from "../SoftUIGenInput";
import {getRandomInt, toHex} from "../../../Functions.SoftUIGenerator";
import React, {useContext, useState} from "react";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";

const SoftUIControlDesktop = () => {
    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        colorHEX,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
        darkShadowFactor,
        lightShadowFactor,
        changeColor,
        resetTheme,
        inverseFont,
        codeFontColor,
        changeShadowBlur,
        changeBorderRadius,
        changeShadowLength,
        codeBackgroundColor,
        changeDarkShadowFactor,
        changeLightShadowFactor,
    } = themeContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(true);
    const onChangeBlur = (event) => changeShadowBlur(event.target.value);
    const onChangeRadius = (event) => changeBorderRadius(event.target.value);
    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);
    const onChangeShadowLength = (event) => changeShadowLength(event.target.value);
    const onChangeLightShadowFactor = (event) => changeLightShadowFactor(event.target.value);
    const onChangeDarkShadowFactor = (event) => changeDarkShadowFactor(event.target.value);
    const generateRandom = () => {
        let rgbObject = {
            Red:getRandomInt(255),
            Green:getRandomInt(255),
            Blue:getRandomInt(255)
        }
        changeColor('RGB', rgbObject);
    }

    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    const hexInput = (
        <div className={"row"}>
            <div className={'col-3'}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span>Mode</span>
                    </Badge>
                </h6>
                <SoftUIGenButton
                    props={componentProps}
                    children={colorInputMode ? "Hex" : "RGB"}
                    style={{height:'50px'}}
                    onClick={() => setColorInputMode(!colorInputMode)}
                />
            </div>
            <div className={"col-9"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow, color: font }}>
                        #<span style={{ color: "#ed2939", fontWeight: "bold" }}>FF</span>
                        <span style={{ color: "#0B6623", fontWeight: "bold" }}>FF</span>
                        <span style={{ color: "#0f52Ba", fontWeight: "bold" }}>FF</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    onChange={(event) => onChangeColor(event, "Hex")}
                    value={colorHEX}
                    placeholder={"#000000"}
                    props={componentProps}
                />
            </div>
        </div>
    );

    const rgbInput = (
        <div className={"row"}>
            <div className={'col-lg-3'}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span>Mode</span>
                    </Badge>
                </h6>
                <SoftUIGenButton
                    props={componentProps}
                    style={{height:'50px'}}
                    children={colorInputMode ? "Hex" : "RGB"}
                    onClick={() => setColorInputMode(!colorInputMode)}
                />
            </div>
            <div className={"col-lg-3"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span style={{ color: "#ed2939" }}>R</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Red")}
                    value={colorRGB.Red}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={"col-lg-3"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span style={{ color: "#0B6623" }}>G</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Green")}
                    value={colorRGB.Green}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={"col-lg-3"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span style={{ color: "#0f52Ba" }}>B</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Blue")}
                    value={colorRGB.Blue}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
        </div>
    );

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
            <div className={"row"}>
                <div className={"col-6 mr-3"}>
                    <h5>Pick a color:</h5>
                </div>
            </div>
            <div className={'row mb-3'}>
                <div className={'col-2'}>
                    <ColorPickerSketch />
                </div>
                <div className={'col-6'}>
                    <SoftUIGenButton props={componentProps}
                                     onClick={generateRandom}
                                     children={'Random color'}
                    />
                </div>
                <div className={'col-4'}>
                    <SoftUIGenButton props={componentProps}
                                     onClick={resetTheme}
                                     children={'Reset'}
                    />
                </div>
            </div>
            <div className={"row mb-3"}>
                <div className={"col-12"}>
                    <SoftUIGenButton
                        props={componentProps}
                        onClick={() => inverseFont()}
                        children={'Change font color'}
                    />
                </div>
            </div>
            <div className={'row-mb-3'}>
                <div className={"col-12"}>
                    {colorInputMode ? hexInput : rgbInput}
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-md-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Blur</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeBlur}
                        value={shadowBlur}
                        placeholder={"30"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-md-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Radius</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeRadius}
                        value={borderRadius}
                        placeholder={"12"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-md-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Shadow Length</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeShadowLength}
                        value={shadowLength}
                        placeholder={"5px"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-sm-6"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Dark Shadow</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeDarkShadowFactor}
                        value={Math.round(darkShadowFactor * 100)}
                        placeholder={"dark shadow factor"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-sm-6"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Light Shadow</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeLightShadowFactor}
                        value={Math.round(lightShadowFactor * 100)}
                        placeholder={"light shadow factor"}
                        props={componentProps}
                    />
                </div>
            </div>
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
    )
}

export default SoftUIControlDesktop