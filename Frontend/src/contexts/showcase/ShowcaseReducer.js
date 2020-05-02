import {
    CHANGE_SHOWCASE_COLOR,
    CHANGE_DARK_MODE_SHOWCASE_COLOR
} from "../types";
import {calculateTintAndShades, fontColor, hexToRGB, isHexValid} from "../../Functions";

export default (state, action) => {
    let darkModeFactor = (factor) => {
        if (factor < 0) {
            return 0
        } else return factor
    };
    switch (action.type){
        case CHANGE_SHOWCASE_COLOR:
            console.log('action.payload before',action.payload)
            let hexWithoutHash = action.payload.newColor.replace('#','')
            if(isHexValid(hexWithoutHash)){
                //  TODO refactor to one object
                const {Red, Green, Blue} = hexToRGB(hexWithoutHash)
                let darkModeDarkShadowFactor = Math.round(darkModeFactor(state.darkModeFactor) * .75);
                let darkModeLightShadowFactor = Math.round(darkModeFactor(state.darkModeFactor) * .9);
                let darkModeBackground = calculateTintAndShades(Red, Green, Blue,
                    darkModeFactor(state.darkModeFactor));
                let darkModeDarkShadow = calculateTintAndShades(
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor(state.darkModeFactor))).Red,
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor(state.darkModeFactor))).Green,
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor(state.darkModeFactor))).Blue,
                    85)
                let darkModeLightShadow = calculateTintAndShades(
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeLightShadowFactor)).Red,
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeLightShadowFactor)).Green,
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeLightShadowFactor)).Blue,
                    105
                )
                let darkModeFont = fontColor(
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeDarkShadowFactor)).Red,
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeDarkShadowFactor)).Green,
                    hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeDarkShadowFactor)).Blue
                )

                const darkShadow = calculateTintAndShades(Red, Green, Blue, 85)
                const lightShadow = calculateTintAndShades(Red, Green, Blue, 105)

                return {
                    ...state,
                    inputValue: action.payload.newColor,
                    backgroundColor: `#${hexWithoutHash}`,
                    showcaseDarkShadow: darkShadow,
                    showcaseLightShadow: lightShadow,
                    darkModeBackground: darkModeBackground,
                    darkModeBackgroundDarkShadow: darkModeDarkShadow,
                    darkModeBackgroundLightShadow: darkModeLightShadow,
                    darkModeFont: darkModeFont,
                }
            } else {
                return {
                    ...state,
                    inputValue: action.payload.newColor,
                }
            }
        case CHANGE_DARK_MODE_SHOWCASE_COLOR: {
            let {Red, Green, Blue} = hexToRGB(state.backgroundColor)
            console.log('red green blue', Red, Green, Blue, action.payload.newFactor)

            //  TODO refactor to one object
            let darkmodeDarkShadowFactor = Math.round(darkModeFactor(action.payload.newFactor) * .75);
            let darkmodeLightShadowFactor = Math.round(darkModeFactor(action.payload.newFactor) * .9);
            let darkModeBackground = calculateTintAndShades(Red, Green, Blue,
                darkModeFactor(action.payload.newFactor));
            let darkModeDarkShadow = calculateTintAndShades(
                hexToRGB(calculateTintAndShades(Red, Green, Blue,
                    darkModeFactor(action.payload.newFactor))).Red,
                hexToRGB(calculateTintAndShades(Red, Green, Blue,
                    darkModeFactor(action.payload.newFactor))).Green,
                hexToRGB(calculateTintAndShades(Red, Green, Blue,
                    darkModeFactor(action.payload.newFactor))).Blue,
                85)
            let darkModeLightShadow = calculateTintAndShades(
                hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Red,
                hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Green,
                hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Blue,
                105
            )
            let darkModeFont = fontColor(
                hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Red,
                hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Green,
                hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Blue
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