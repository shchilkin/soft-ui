import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {calculateTintAndShades, fontColor, generateTintAndShades, hexToRGB} from "../../../../../../Functions";
import Card from "../../../Layout/Card";
import Badge from "../../../../../Badge/Badge.component";

const PreviewStageChooseColor = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        darkShadowFactor,
        lightShadowFactor,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
        darkModeFactor} = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const darkModeBackground = calculateTintAndShades(Red, Green, Blue, darkModeFactor)
    const darkmodeDarkShadowFactor = Math.round(darkModeFactor * .75);
    const darkmodeLightShadowFactor = Math.round(darkModeFactor * .9);

    const darkModeDarkShadow = calculateTintAndShades(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Blue,
        Math.round(darkShadowFactor * 100))
    const darkModeLightShadow = calculateTintAndShades(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Blue,
        Math.round(lightShadowFactor * 100)
    )
    const darkModeFont = fontColor(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Blue
    )


    return (
        <div>
            <div className={"row mb-3"}>
                <div className={"col-md-6"}>
                    <Card>
                        <Card style={{height:'254px'}}>
                            <Badge>Preview</Badge>
                        </Card>
                    </Card>
                </div>
                <div className={"col-md-6"}>
                    <Card background={darkModeBackground}>
                        <Card
                            background={darkModeBackground}
                            lightShadow={darkModeLightShadow}
                            darkShadow={darkModeDarkShadow}
                            color={darkModeFont}
                            style={{height:'254px'}}>
                            <Badge>Dark mode</Badge>
                        </Card>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageChooseColor;
