import React, {useContext, useState} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {getRandomInt, toHex} from "../../../../../../Functions";
import Badge from "../../../../../Badge/Badge.component";
import Button from "../../../Layout/Button";
import Input from "../../../Layout/Input";
import ColorPickerSketch from "../../../colorPickerSketch";

const ControlStageOne = () => {
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
            <div className={'col-3 text-center'}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span style={{color:font}}>Mode</span>
                    </Badge>
                </h6>
                <Button
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
        <div className={"row text-center"}>
            <div className={'col-lg-3'}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow }}>
                        <span style={{color:font}}>Mode</span>
                    </Badge>
                </h6>
                <Button
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
                <Input
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
                <Input
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
                    <Button props={componentProps}
                            onClick={generateRandom}
                            children={'Random color'}
                    />
                </div>
                <div className={'col-4'}>
                    <Button props={componentProps}
                            onClick={resetTheme}
                            children={'Reset'}
                    />
                </div>
            </div>
            <div className={"row mb-3"}>
                <div className={"col-12"}>
                    <Button
                        props={componentProps}
                        onClick={() => inverseFont()}
                        children={'Change font color'}
                    />
                </div>
            </div>
            {colorInputMode ? hexInput : rgbInput}
        </div>
    )
}

export default ControlStageOne;