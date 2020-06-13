import ColorPickerSketch from "../../ColorPickers/colorPickerSketch";
import Button from "../Button";
import Input from "../Input/Input";
import {getRandomInt, toHex} from "../../../../../Functions";
import React, {useContext} from "react";
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
                <Input
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
                <Input
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Red")}
                    value={colorRGB.Red}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={"col-4"}>
                <Input
                    type={"number"}
                    onChange={(event) => onChangeColor(event, "Green")}
                    value={colorRGB.Green}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={"col-4"}>
                <Input
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
                    <Button props={componentProps}
                            onClick={generateRandom}
                            children={'Random color'}
                    />
                </div>
                <div className={'col-3'}>
                    <Button props={componentProps}
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
                    </Button>
                </div>
            </div>
            <div className={"row mb-3"}>
                <div className={"col-12"}>
                    <Button
                        props={componentProps}
                        onClick={() => inverseFont()}
                        children={'Change font color'}
                    />
                    <div className={'text-center'}>
                    <span style={{fontSize: 'x-small'}}>R. {borderRadius}px</span> |{' '}
                    <span style={{fontSize: 'x-small'}}>B. {shadowBlur}px</span> |{' '}
                    <span style={{fontSize: 'x-small'}}>Le. {shadowLength}px</span> |{' '}
                    <span style={{fontSize: 'x-small'}}>D. {Math.round(darkShadowFactor*100)}%</span> |{' '}
                    <span style={{fontSize: 'x-small'}}>Li. {Math.round(lightShadowFactor*100)}%</span>
                    </div>
                </div>
            </div>
            <div className={"row mb-3"}>
                <div className={'col-3'}>
                    <span style={{fontWeight:'bold'}}>Radius</span>
                </div>
                <div className={"col-9"}>
                    <Input
                        min={0}
                        max={100}
                        type={"range"}
                        onChange={onChangeRadius}
                        value={borderRadius}
                        props={componentProps}
                    />
                </div>
                <div className={'col-3'}>
                    <span style={{fontWeight:'bold'}}>Blur</span>
                </div>
                <div className={"col-9"}>
                    <Input
                        type={"range"}
                        min={0}
                        max={100}
                        onChange={onChangeBlur}
                        value={shadowBlur}
                        props={componentProps}
                    />
                </div>
                <div className={'col-3'}>
                    <span style={{fontWeight:'bold'}}>Length</span>
                </div>
                <div className={"col-9"}>
                    <Input
                        type={"range"}
                        max={50}
                        min={0}
                        onChange={onChangeShadowLength}
                        value={shadowLength}
                        placeholder={"5px"}
                        props={componentProps}
                    />
                </div>
                <div className={'col-3'}>
                    <span style={{fontWeight:'bold'}}>Dark</span>
                </div>
                <div className={"col-9"}>
                    <Input
                        min={0}
                        max={200}
                        type={"range"}
                        onChange={onChangeDarkShadowFactor}
                        value={Math.round(darkShadowFactor * 100)}
                        props={componentProps}
                    />
                </div>
                <div className={'col-3'}>
                    <span style={{fontWeight:'bold'}}>Light</span>
                </div>
                <div className={"col-9"}>
                    <Input
                        min={0}
                        max={200}
                        type={"range"}
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
                        showcaseColor: codeBackgroundColor,
                        borderRadius: "12px",
                        boxShadow: `${codeBackgroundColor} 2px 2px 10px 0px inset, ${codeBackgroundColor} -2px -2px 10px 0px inset`,
                    }}
                >
                  <code style={{ fontSize: "10px", color: codeFontColor }}>
                    <span style={{ color: "#FF006C" }}>background:</span>{" "}
                      <span style={{ fontWeight: "bold" }}>#{colorHEX}
                    </span>
                    ;<br />
                    <span style={{ color: "#FF006C" }}>
                      border-radius:
                    </span>{" "}
                      {borderRadius}px;
                    <br />
                    <span style={{ color: "#FF006C" }}>box-shadow:</span>{" "}
                      {shadowLength}px {shadowLength}px {shadowBlur}px 0{" "}
                      <span style={{ fontWeight: "bold" }}>
                        #{toHex(darkerShadows[0])}{toHex(darkerShadows[1])}{toHex(darkerShadows[2])}
                    </span>
                    ,
                    <br />
                      {"            "}-{shadowLength}px -{shadowLength}px{" "}
                      {shadowBlur}px 0{" "}
                      <span style={{ fontWeight: "bold" }}>
                            #{toHex(lighterShadows[0])}{toHex(lighterShadows[1])}{toHex(lighterShadows[2])}
                    </span>
                    ;
                  </code>
                </pre>
            </div>
        </div>
    )
}

export default SoftUIControlMobile