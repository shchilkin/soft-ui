import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {calculateTintAndShades, fontColor, hexToRGB} from "../../../../../../Functions";
import Card from "../../../Layout/Card";
import Badge from "../../../../../Badge/Badge.component";
import StagesContext from "../../../../../../contexts/Stages/StagesContext";

const PreviewStageChooseColor = () => {

    const themeContext = useContext(ThemeContext);
    const {colorRGB, darkShadowFactor, lightShadowFactor, darkModeFactor,
        darkModeDarkShadowFactor, darkModeLightShadowFactor, secondaryColor
        } = themeContext;

    // darkModeDarkShadow, darkModeLightShadow
    const stagesContext = useContext(StagesContext);
    const {generateDarkMode, generateSecondaryColor} = stagesContext;

    const {Red, Green, Blue} = colorRGB;

    const darkModeBackground = calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))
    const darkmodeDarkShadowFactor = Math.round(Math.round(darkModeFactor * 100) *  darkModeDarkShadowFactor);
    const darkmodeLightShadowFactor = Math.round(Math.round(darkModeFactor * 100) *  darkModeLightShadowFactor);

    const darkModeDarkShadow = calculateTintAndShades(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))).Blue,
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

    const darkModePreviewContainer = (
        <div className={"col"}>
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
    )

    const secondaryColorPreviewContainer = (
        <div className={"row"}>
            <div className={'col-12'}>
                <Badge>Secondary colors</Badge>
                <Card>
                    <div style={{height:'254px', borderRadius:'12px', backgroundColor:secondaryColor}}/>
                </Card>
            </div>
        </div>
    )


    return (
        <div>
            <div className={"row mb-3"}>
                <div className={"col"}>
                    <Card>
                        <Card style={{height:'254px'}}>
                            <Badge>Preview</Badge>
                        </Card>
                    </Card>
                </div>
                {generateDarkMode && darkModePreviewContainer}
            </div>
            {generateSecondaryColor && secondaryColorPreviewContainer}
        </div>
    )
}

export default PreviewStageChooseColor;