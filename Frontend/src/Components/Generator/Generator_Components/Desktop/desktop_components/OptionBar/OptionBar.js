import React, {useContext} from "react";
import { Bar } from '../../../../../../StyledComponents'
import {calculateTintAndShades} from "../../../../../../Functions";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Badge_OB from "./Badge_OB";

const OptionBar = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    return(
        <div>
            <Bar
                className={'d-none d-sm-block'}
                background={calculateTintAndShades(Red, Green, Blue, 75,"hex")}
                border={borderRadius}
            >

                <Badge_OB
                    activeOnStage={0}
                >
                    About
                </Badge_OB>{" "}
                <Badge_OB
                    activeOnStage={1}>
                    choose Color
                </Badge_OB>{" "}
                <Badge_OB
                    activeOnStage={2}
                >
                    Customize components
                </Badge_OB>{" "}
                <Badge_OB
                    activeOnStage={3}>
                    Generate CSS
                </Badge_OB>{" "}
            </Bar>
        </div>
    )
}
export default OptionBar
