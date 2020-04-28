import React, {useContext, useState} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {getRandomInt} from "../../../../../../Functions";
import ColorPickerSketch from "../../../ColorPickers/colorPickerSketch";
import StagesContext from "../../../../../../contexts/Stages/StagesContext";
import Badge from "../../../../../Badge/Badge.component";
import Button from "../../../Layout/Button";
import Input from "../../../Layout/Input";
import SecondaryColorsPanel from "../SecondaryColorsPanel";

const ControlStageChooseColor = () => {
    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        colorHEX,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
        changeColor,
        resetTheme,
        inverseFont,
        darkModeFactor,
        changeDarkModeFactor,
        darkModeDarkShadowFactor, darkModeLightShadowFactor,
        changeDarkModeDarkShadowFactor, changeDarkModeLightShadowFactor,} = themeContext;

    const stagesContext = useContext(StagesContext);
    const {
        generateDarkMode, generateSecondaryColor,
        changeGenerateDarkMode,changeGenerateSecondaryColor} = stagesContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(true);

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    const onChangeDarkMode = () => changeGenerateDarkMode();
    const onChangeSecondaryColor = () => changeGenerateSecondaryColor();

    const onChangeDarkModeFactor = (event) => changeDarkModeFactor(event.target.value);

    const onChangeDarkModeDarkShadowFactor = (event) => changeDarkModeDarkShadowFactor(event.target.value);

    const onChangeDarkModeLightShadowFactor = (event) => {
        console.log('OnchangeDarkModeLightShadow',event.target.value)
        changeDarkModeLightShadowFactor(event.target.value);
    }

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

    const darkModeSettings = (
        <div className={"row"}>
            <div className={"col-4"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow, color: font }}>Dark mode, %</Badge>
                </h6>
                <Input
                    type={'number'}
                    onChange={(event) => onChangeDarkModeFactor(event)}
                    value={Math.round(darkModeFactor * 100)}
                    placeholder={"#000000"}
                    props={componentProps}
                />
            </div>
            <div className={"col-4"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow, color: font }}>Dark Shadow, %</Badge>
                </h6>
                <Input
                    type={'number'}
                    onChange={(event) => onChangeDarkModeDarkShadowFactor(event)}
                    value={Math.round(darkModeDarkShadowFactor * 100)}
                    placeholder={"#000000"}
                    props={componentProps}
                />
            </div>
            <div className={"col-4"}>
                <h6>
                    <Badge style={{ backgroundColor: darkerShadow, color: font }}>Light shadow, %</Badge>
                </h6>
                <Input
                    type={'number'}
                    onChange={(event) => onChangeDarkModeLightShadowFactor(event)}
                    value={Math.round(darkModeLightShadowFactor * 100)}
                    placeholder={"#000000"}
                    props={componentProps}
                />
            </div>
        </div>
    );

    const secondaryColorSettings = (
        <div className={"row"}>
            <div className={'col-12'}>
                <SecondaryColorsPanel />
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
                        children={'Inverse font color'}
                    />
                </div>
            </div>
            {colorInputMode ? hexInput : rgbInput}
            <div className={"row mb-3"}>
                <div className={'col-12'}>
                    <label>Generate darkmode</label>
                    <input
                        type={'checkbox'}
                        onChange={() => onChangeDarkMode()}
                        checked={generateDarkMode}
                    />{" "}
                    <label>Generate secondary color</label>
                    <input
                        type={'checkbox'}
                        onChange={() => onChangeSecondaryColor()}
                        checked={generateSecondaryColor}/>
                </div>
            </div>
            {generateDarkMode && darkModeSettings}
            {generateSecondaryColor && secondaryColorSettings}
        </div>
    )
}

export default ControlStageChooseColor;