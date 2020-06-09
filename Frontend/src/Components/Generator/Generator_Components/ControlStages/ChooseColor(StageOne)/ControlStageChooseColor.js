import React, {Fragment, useContext, useState} from "react";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";
import {
    calculateTintAndShades,
    fontColorHex,
    getRandomInt
} from "../../../../../Functions";
import Button from "../../Layout/Button";
import Card from "../../Layout/Card";
import RGBinput from "./RGBinput";
import Input from "../../Layout/Input";

const ControlStageChooseColor = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorHEX,
        changeColor,
        shadowBlur,
        shadowLength,
        resetTheme,
        inverseFont,} = themeContext;

    const controlCardBG = "#F0F0F0";
    const font = fontColorHex(controlCardBG);
    const darkShadow = calculateTintAndShades(240,240,240,85)
    const lightShadow = calculateTintAndShades(240,240,240,105)

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(false);

    const generateRandom = () => {
        let rgbObject = {
            Red:getRandomInt(255),
            Green:getRandomInt(255),
            Blue:getRandomInt(255)
        }
        changeColor('RGB', rgbObject);
    }

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    const hexInput = (
        <Input
        onChange={(event) => onChangeColor(event, "Hex")}
        value={colorHEX}
        style={{maxHeight:'32px', border: "0px",marginBottom:'0',textAlign:'center',
            borderRadius:'6px'}}
        placeholder={"#000000"}
    />
    )

    return (
        <Fragment>
            <div className={'mb-3'}>
                <Card
                    background={controlCardBG}
                    darkShadow={calculateTintAndShades(240,240,240,85)}
                    lightShadow={calculateTintAndShades(240,240,240,105)}
                >
                    <div className={'container pb-3'} style={{
                        backgroundColor:controlCardBG,
                        borderBottomRightRadius:'8px',borderBottomLeftRadius:'8px'}}>
                        <div className={'row pt-4 mb-3'}>
                            <div className={'col-6'}>
                                <Button
                                    sameShadowColor={true}
                                    background={controlCardBG}
                                    color={font}
                                    onClick={generateRandom} children={'Random color'}/>
                            </div>
                            <div className={'col-6'}>
                                <Button
                                    sameShadowColor={true}
                                    background={controlCardBG}
                                    color={font}
                                    onClick={resetTheme} children={'Reset'}/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'mb-3 col-md-4'}>
                                <Button
                                    sameShadowColor={true}
                                    background={controlCardBG}
                                    color={font}
                                    style={{height:'50px'}}
                                    onClick={() =>setColorInputMode(!colorInputMode)}
                                    children={ colorInputMode ? "Hex" :'RGB'}/>
                            </div>
                            <div className={'col-md-8'}>
                                <div style={{borderRadius:'12px',
                                    boxShadow:`5px 5px 30px 0 
                                    ${calculateTintAndShades(240,240,240,85)},
                                     -5px -5px 30px 0 ${calculateTintAndShades(240,240,240,105)}`,}}>
                                    <div style={{padding:'9px',borderRadius:'12px',
                                        borderTopLeftRadius:'0',borderBottomLeftRadius:'0'
                                    }}>
                                        {colorInputMode ? hexInput : <RGBinput/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"row mb-1"}>
                            <div className={"col-12"}>
                                <Button
                                    sameShadowColor={true}
                                    background={controlCardBG}
                                    color={font}
                                    onClick={() => inverseFont()}
                                    children={'Inverse font color'}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default ControlStageChooseColor;