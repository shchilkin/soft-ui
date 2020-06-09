import React, {useContext} from "react";
import {Badge, Badge_chosen} from '../../../../StyledComponents'
import StagesContext from "../../../../contexts/Stages/StagesContext";
import {calculateTintAndShades} from "../../../../Functions";
import ThemeContext from "../../../../contexts/theme/ThemeContext";


const Badge_OB = ({children, activeOnStage}) => {

    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
    } = themeContext;

    const generationContext = useContext(StagesContext);
    const { stage } = generationContext;

    const {Red, Green, Blue} = colorRGB;

    const activeBadge = (
        <Badge_chosen
            background={calculateTintAndShades(Red, Green, Blue, 115,"hex")}
            border={Math.round(borderRadius/2)}
        >
            {children}
        </Badge_chosen>
    )
    const inactiveBadge = (
        <Badge
            background={calculateTintAndShades(Red, Green, Blue, 95,"hex")}
            border={Math.round(borderRadius/2)}
        >
            {children}
        </Badge>
    )
    const shouldBeActive = (activeOnStage, stage) => {
        if (activeOnStage instanceof Array){
            console.log('Active on stage | number,stage, isTrue?',activeOnStage[1],stage,(activeOnStage[1] < stage))
            return activeOnStage[0] === stage || ((stage > activeOnStage[0]) && ( activeOnStage[1] >= stage))
        } else
        return activeOnStage === stage;
    }

    return shouldBeActive(activeOnStage, stage) ? activeBadge : inactiveBadge
}

export default Badge_OB;