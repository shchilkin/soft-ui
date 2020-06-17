import {
    CHANGE_SHOWCASE_COLOR,
    CHANGE_SECONDARY_COLOR,
    CHANGE_DARK_MODE_SHOWCASE_COLOR
} from "../types";
import { calculateColors } from "../../Functions";
import { getFontColor, hexToRGB, isHexColorValid, getTintsAndShades } from '@soft-ui-generator/color-processing-library';

export default (state, action) => {
    let darkModeFactor = (factor) => {
        if (factor < 0) {
            return 0
        } else return factor
    };

    const colorObject = (color, state, action) => {
        const {Red, Green, Blue} = hexToRGB(color)
        let darkModeDarkShadowFactor = Math.round(darkModeFactor(state.darkModeFactor) * .75);
        let darkModeLightShadowFactor = Math.round(darkModeFactor(state.darkModeFactor) * .9);
        let darkModeBackground = getTintsAndShades(Red, Green, Blue,
            darkModeFactor(state.darkModeFactor));
        let darkModeDarkShadow = getTintsAndShades(
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeFactor(state.darkModeFactor))).Red,
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeFactor(state.darkModeFactor))).Green,
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeFactor(state.darkModeFactor))).Blue,
            85)
        let darkModeLightShadow = getTintsAndShades(
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeLightShadowFactor)).Red,
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeLightShadowFactor)).Green,
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeLightShadowFactor)).Blue,
            105
        )
        let darkModeFont = getFontColor(
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeDarkShadowFactor)).Red,
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeDarkShadowFactor)).Green,
            hexToRGB(getTintsAndShades(Red, Green, Blue, darkModeDarkShadowFactor)).Blue
        )

        const darkShadow = getTintsAndShades(Red, Green, Blue, 85)
        const lightShadow = getTintsAndShades(Red, Green, Blue, 105)
        return {
            showcaseDarkShadow: darkShadow,
            showcaseLightShadow: lightShadow,
            darkModeBackground: darkModeBackground,
            darkModeBackgroundDarkShadow: darkModeDarkShadow,
            darkModeBackgroundLightShadow: darkModeLightShadow,
            darkModeFont: darkModeFont
        }
    }

    switch (action.type){
        case CHANGE_SHOWCASE_COLOR:
            let hexWithoutHash = action.payload.newColor.replace('#','')
            if(isHexColorValid(hexWithoutHash)){
                const {
                    showcaseDarkShadow,
                    showcaseLightShadow,
                    darkModeBackground,
                    darkModeBackgroundDarkShadow,
                    darkModeBackgroundLightShadow,
                    darkModeFont,
                } = colorObject(hexWithoutHash, state)

                const secondaryColor = calculateColors(`#${hexWithoutHash}`);
                const {Red, Green, Blue} = hexToRGB(secondaryColor)

                const secondaryColorDarkShadow = getTintsAndShades(Red,Green,Blue, 85);
                const secondaryColorLightShadow = getTintsAndShades(Red,Green,Blue, 105);

                return {
                    ...state,
                    inputValue: action.payload.newColor,
                    backgroundColor: `#${hexWithoutHash}`,
                    showcaseDarkShadow: showcaseDarkShadow,
                    showcaseLightShadow: showcaseLightShadow,
                    darkModeBackground: darkModeBackground,
                    darkModeBackgroundDarkShadow: darkModeBackgroundDarkShadow,
                    darkModeBackgroundLightShadow: darkModeBackgroundLightShadow,
                    darkModeFont: darkModeFont,
                    secondaryColor: secondaryColor,
                    secondaryColorDarkShadow: secondaryColorDarkShadow,
                    secondaryColorLightShadow: secondaryColorLightShadow,
                }
            } else {
                return {
                    ...state,
                    inputValue: action.payload.newColor,
                }
            }
        case CHANGE_SECONDARY_COLOR:
            console.log("ACTION PAYLOAD", action.payload)
            return {
                ...state,
                secondaryColor: action.payload.newColor,
                secondaryColorDarkShadow: action.payload.darkShadow,
                secondaryColorLightShadow: action.payload.lightShadow,
            }
        case CHANGE_DARK_MODE_SHOWCASE_COLOR: {
            let {Red, Green, Blue} = hexToRGB(state.backgroundColor)

            //  TODO refactor to one object
            let darkmodeDarkShadowFactor = Math.round(darkModeFactor(action.payload.newFactor) * .75);
            let darkmodeLightShadowFactor = Math.round(darkModeFactor(action.payload.newFactor) * .9);
            let darkModeBackground = getTintsAndShades(Red, Green, Blue,
                darkModeFactor(action.payload.newFactor));
            let darkModeDarkShadow = getTintsAndShades(
                hexToRGB(getTintsAndShades(Red, Green, Blue,
                    darkModeFactor(action.payload.newFactor))).Red,
                hexToRGB(getTintsAndShades(Red, Green, Blue,
                    darkModeFactor(action.payload.newFactor))).Green,
                hexToRGB(getTintsAndShades(Red, Green, Blue,
                    darkModeFactor(action.payload.newFactor))).Blue,
                85)
            let darkModeLightShadow = getTintsAndShades(
                hexToRGB(getTintsAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Red,
                hexToRGB(getTintsAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Green,
                hexToRGB(getTintsAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Blue,
                105
            )
            let darkModeFont = getFontColor(
                hexToRGB(getTintsAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Red,
                hexToRGB(getTintsAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Green,
                hexToRGB(getTintsAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Blue
            )
            return {
                ...state,
                darkModeFactor: action.payload.newFactor,
                darkModeBackground: darkModeBackground,
                darkModeBackgroundDarkShadow: darkModeDarkShadow,
                darkModeBackgroundLightShadow: darkModeLightShadow,
                darkModeFont: darkModeFont,
            }
        }
        default:
            return state
    }
}