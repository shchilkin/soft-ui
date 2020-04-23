import ColorPickerSketch from "../../colorPickerSketch";
import SoftUIGenButton from "../SoftUIGenButton";
import Badge from "../../../../Badge/Badge.component";
import SoftUIGenInput from "../SoftUIGenInput";
import {getRandomInt, toHex} from "../../../Functions.SoftUIGenerator";
import React, {useContext, useState} from "react";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";

const SoftUIControlMobile = () => {
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
        <div className={'row'}>
            <div className={"col-12"}>
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
        <div className={'row'}>
            <div className={"col-4"}>
                <SoftUIGenInput
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Red")}
                    value={colorRGB.Red}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={"col-4"}>
                <SoftUIGenInput
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Green")}
                    value={colorRGB.Green}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={"col-4"}>
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
                <div className={'col-7'}>
                    <SoftUIGenButton props={componentProps}
                                     onClick={generateRandom}
                                     children={'Random color'}
                    />
                </div>
                <div className={'col-3'}>
                    <SoftUIGenButton props={componentProps}
                                     onClick={resetTheme}
                    >
                        <svg width="20px" height="20px" viewBox="0 0 659 726" style={{
                            fillRule:"evenodd",
                            clipRule:'evenodd',
                            strokeLinejoin:'round',
                            strokeMiterlimit:2,
                            verticalAlign:"-14%",
                            fill:font
                        }}
                        ><path
                            d="M200.444,92.713c39.579,-16.866 83.13,-26.201 128.844,-26.201c181.739,0 329.288,
                                147.549 329.288,329.288c0,181.739 -147.549,329.288 -329.288,329.288c-181.739,0 -329.288,
                                -147.549 -329.288,-329.288c0,-7.155 0.229,-14.256 0.679,-21.294l98.408,27.603c3.348,
                                124.186 105.213,223.977 230.201,223.977c127.098,0 230.286,
                                -103.188 230.286,-230.286c0,-127.098 -103.188,
                                -230.286 -230.286,-230.286c-30.493,0 -59.61,5.939 -86.257,16.725l48.623,102.218l-254.755,
                                -53.229l119.444,-231.228l44.101,92.713Z"/>
                        </svg>
                    </SoftUIGenButton>
                </div>
            </div>
            <div className={"row mb-3"}>
                <div className={'col-3'}>
                    <SoftUIGenButton
                        props={componentProps}
                        children={colorInputMode ? "Hex" : "RGB"}
                        onClick={() => setColorInputMode(!colorInputMode)}
                    />
                </div>
                <div className={"col-9"}>
                    <SoftUIGenButton
                        props={componentProps}
                        onClick={() => inverseFont()}
                        children={'Change font color'}
                    />
                </div>
            </div>
            {colorInputMode ? hexInput : rgbInput}
            <div className={"row"}>
                <div className={"col-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Blur</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeBlur}
                        value={shadowBlur}
                        placeholder={"30"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Radius</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeRadius}
                        value={borderRadius}
                        placeholder={"12"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Shadow Length</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeShadowLength}
                        value={shadowLength}
                        placeholder={"5px"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-6"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Dark Shadow</Badge></h6>
                    <SoftUIGenInput
                        type={"number"}
                        onChange={onChangeDarkShadowFactor}
                        value={Math.round(darkShadowFactor * 100)}
                        placeholder={"dark shadow factor"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-6"}>
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

export default SoftUIControlMobile