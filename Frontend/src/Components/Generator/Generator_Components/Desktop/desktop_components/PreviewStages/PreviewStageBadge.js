import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {generateTintAndShades} from "../../../../../../Functions";
import {Badge} from "../../../../../../StyledComponents";

const PreviewStageBadge = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,} = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const viewportWidth = window.innerWidth
    function getContainerHeight(viewportWidth) {
        if(viewportWidth < 500){
            return 175
        } else return 300
    }

    const colors = generateTintAndShades(Red,Green,Blue)
    console.log('COLORS', colors.tints["130"])

    // 130,140,150,160

    return (
        <div>
            <Badge
                background={colors.tints["130"]}
                border={borderRadius}
            >Badge</Badge>
            <Badge
                background={colors.tints["140"]}
                border={borderRadius}
            >Badge</Badge>
            <Badge
                background={colors.tints["150"]}
                border={borderRadius}
            >Badge</Badge>
            <Badge
                background={colors.tints["160"]}
                border={borderRadius}
            >Badge</Badge>
        </div>
    )
}

export default PreviewStageBadge;
