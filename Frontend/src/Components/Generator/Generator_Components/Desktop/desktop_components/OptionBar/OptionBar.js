import React, {useContext} from "react";
import { Bar } from '../../../../../../StyledComponents'
import {calculateTintAndShades} from "../../../../../../Functions";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Badge_OB from "./Badge_OB";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";

const OptionBar = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    function checkStageComponentBar(stage) {
        return stage >= 2
    }

    const conponentsBar = (
        <Bar
            className={'d-none d-sm-block'}
            background={calculateTintAndShades(Red, Green, Blue, 75,"hex")}
            border={borderRadius}>
            <Badge_OB activeOnStage={2}>Card</Badge_OB>{" "}
            <Badge_OB activeOnStage={3}>Button</Badge_OB>{" "}
            <Badge_OB activeOnStage={4}>Input</Badge_OB>{" "}
            <Badge_OB activeOnStage={5}>Badge</Badge_OB>{" "}
        </Bar>
    )

    return(
        <div>
            <Bar
                className={'d-none d-sm-block'}
                background={calculateTintAndShades(Red, Green, Blue, 75,"hex")}
                border={borderRadius}
            >
                <Badge_OB activeOnStage={0}>About</Badge_OB>{" "}
                <Badge_OB activeOnStage={1}>choose Color</Badge_OB>{" "}
                <Badge_OB activeOnStage={[2,5]}>Customize components</Badge_OB>{" "}
                <Badge_OB activeOnStage={6}>Generate CSS</Badge_OB>{" "}
            </Bar>
            {checkStageComponentBar(stage) && conponentsBar}
        </div>
    )
}
export default OptionBar
