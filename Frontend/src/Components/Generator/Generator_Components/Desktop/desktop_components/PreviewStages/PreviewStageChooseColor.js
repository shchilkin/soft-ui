import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import StagesContext from "../../../../../../contexts/Stages/StagesContext";
import Card from "../../../Layout/Card";
import Badge from "../../../../../Badge/Badge.component";
import {calculateTintAndShades, fontColor, fontColorHex, hexToRGB} from "../../../../../../Functions";


const PreviewStageChooseColor = () => {

    const themeContext = useContext(ThemeContext);
    const {colorRGB, darkShadowFactor, lightShadowFactor,shadows, darkModeFactor,
        darkModeDarkShadowFactor, darkModeLightShadowFactor} = themeContext;

    // darkModeDarkShadow, darkModeLightShadow
    const stagesContext = useContext(StagesContext);
    const {generateDarkMode} = stagesContext;

    const {Red, Green, Blue} = colorRGB;

    const darkModeBackground = calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))
    const darkmodeDarkShadowFactor = Math.round(Math.round(darkModeFactor * 100) *  darkModeDarkShadowFactor);
    const darkmodeLightShadowFactor = Math.round(Math.round(darkModeFactor * 100) *  darkModeLightShadowFactor);

    const darkShadowColor = `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`

    const {
        Red: darkModeRed,
        Green: darkModeGreen,
        Blue: darkModeBlue} = hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor));

    const darkModeDarkShadow = () => {
        let {Red: red, Green: green, Blue: blue} =
            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor))

        return calculateTintAndShades(red,green,blue,Math.round(darkShadowFactor * 100))
    }
    const darkModeLightShadow = () => {
        let {Red: red, Green: green, Blue: blue} =
            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor))

        return calculateTintAndShades(red,green,blue,Math.round(lightShadowFactor * 100))
    }

    const darkModeFont = fontColor( darkModeRed, darkModeGreen, darkModeBlue)

    const darkModePreviewContainer = (
        <div className={'row mb-3'}>
            <div className={"col"}>
                <Card background={darkModeBackground}
                      style={{height:'248px'}}
                >
                    <Card
                        background={darkModeBackground}
                        lightShadow={darkModeLightShadow}
                        darkShadow={darkModeDarkShadow}
                        color={darkModeFont}
                        style={{height:'100%'}}
                    >
                        <Badge background={calculateTintAndShades(
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))).Red,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))).Green,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, Math.round(darkModeFactor * 100))).Blue,
                            120)}>
                            Dark mode
                        </Badge>
                    </Card>
                </Card>
            </div>
        </div>
    )

    return (
        <div>
            <div className={"row mb-3"}>
                <div className={"col"}>
                    <Card style={{height: '353px'}}>
                        <Badge background={darkShadowColor}>Preview</Badge>
                    </Card>
                </div>
            </div>
            {generateDarkMode && darkModePreviewContainer}
        </div>
    )
}

export default PreviewStageChooseColor;