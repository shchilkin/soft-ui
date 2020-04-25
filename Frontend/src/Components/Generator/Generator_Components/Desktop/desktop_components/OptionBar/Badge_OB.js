import React, {useContext} from "react";
import {Badge, Badge_chosen} from '../../../../../../StyledComponents'
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import {calculateTintAndShades} from "../../../../../../Functions";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";


const Badge_OB = ({children, activeOnStage}) => {

    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
    } = themeContext;

    const generationContext = useContext(GenerationContext);
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
        return activeOnStage === stage;
    }

    return shouldBeActive(activeOnStage, stage) ? activeBadge : inactiveBadge
}

export default Badge_OB;