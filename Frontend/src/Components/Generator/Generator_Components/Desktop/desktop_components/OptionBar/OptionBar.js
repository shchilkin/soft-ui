import React, {useContext} from "react";
import { Bar } from '../../../../../../StyledComponents'
import {calculateTintAndShades, calculateShadows, calculateColor, toHex} from "../../../../../../Functions";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Badge_OB from "./Badge_OB";
import StagesContext from "../../../../../../contexts/Stages/StagesContext";
import Button from "../../../Layout/Button";

const OptionBar = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
        darkShadowFactor,
        lightShadowFactor
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const generationContext = useContext(StagesContext);
    const { stage, changeStage } = generationContext;

    function checkStageComponentBar(stage) {
        return stage >= 2
    }
    const barShadows = calculateShadows(
        calculateColor(Red,0.75),
        calculateColor(Green,0.75),
        calculateColor(Blue,0.75),
        lightShadowFactor,darkShadowFactor)

    const {darkerShadowArray, ligherShadowArray} = barShadows;

    console.log('bar shadows',barShadows)

    const darkShadow = toHex(darkerShadowArray[0])+toHex(darkerShadowArray[1])+toHex(darkerShadowArray[2])
    const lightShadow = toHex(ligherShadowArray[0])+toHex(ligherShadowArray[1])+toHex(ligherShadowArray[2])
    console.log('Shadows',darkShadow,lightShadow)
    const componentsBar = (
        <Bar
            className={'d-none d-sm-block'}
            background={calculateTintAndShades(Red, Green, Blue, 75,"hex")}
            darkShadow={darkShadow}
            lightShadow={lightShadow}
            border={borderRadius}>
            <Badge_OB activeOnStage={2}>Card</Badge_OB>{" "}
            <Badge_OB activeOnStage={3}>Button</Badge_OB>{" "}
            <Badge_OB activeOnStage={4}>Input</Badge_OB>{" "}
            <Badge_OB activeOnStage={5}>Badge</Badge_OB>{" "}
        </Bar>
    )

    return(
        <div className={'row'}>
            <div className={'col-2'}>
                <Button
                    onClick={() => changeStage("-")}
                >Previous stage</Button>
            </div>
            <div className={'col-2'}>
                <Button
                    onClick={() => changeStage("+")}
                >Next stage</Button>
            </div>
            <div className={'col-8'}>
                <Bar
                    className={'d-none d-sm-block'}
                    background={calculateTintAndShades(Red, Green, Blue, 75,"hex")}
                    border={borderRadius}
                    darkShadow={darkShadow}
                    lightShadow={lightShadow}
                >
                    <Badge_OB activeOnStage={0}>About</Badge_OB>{" "}
                    <Badge_OB activeOnStage={1}>choose Color</Badge_OB>{" "}
                    {/*<Badge_OB activeOnStage={[2,5]}>Customize components</Badge_OB>{" "}*/}
                    <Badge_OB activeOnStage={2}>Card</Badge_OB>{" "}
                    <Badge_OB activeOnStage={3}>Button</Badge_OB>{" "}
                    <Badge_OB activeOnStage={4}>Input</Badge_OB>{" "}
                    <Badge_OB activeOnStage={5}>Badge</Badge_OB>{" "}
                    <Badge_OB activeOnStage={6}>Generate CSS</Badge_OB>{" "}
                </Bar>
            </div>
            {/*{checkStageComponentBar(stage) && componentsBar}*/}
        </div>
    )
}
export default OptionBar
