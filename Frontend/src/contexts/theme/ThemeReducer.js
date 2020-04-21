import {
    CHANGE_COLOR,
    CHANGE_THEME,
    CHANGE_SHADOW_BLUR,
    CHANGE_BORDER_RADIUS,
    CHANGE_SHADOW_LENGTH,
    CHANGE_DARK_SHADOW_FACTOR,
    CHANGE_LIGHT_SHADOW_FACTOR,
    INVERSE_FONT
} from '../types';
import {invertFont} from "../../Components/Generator/Functions.SoftUIGenerator";

import {
    calculateShadows,
    fontColor,
    toHex,
    isHexValid,
    hexToRGB,
    numberRangeCheck,
    calculateShadowFactor
}from '../../Components/Generator/Functions.SoftUIGenerator';
export default (state, action) => {
    switch (action.type){
        case CHANGE_THEME:
            localStorage.setItem('theme',(!state.darkMode).toString());
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case CHANGE_COLOR:
            switch (action.payload.colorName) {
                //TODO Red Green and Blue return seems similar => Create function
                case "Red":
                    console.log('font color',fontColor(
                    numberRangeCheck(action.payload.colorValue),
                    state.Green,
                    state.Blue
                ),)
                    return {
                        ...state,
                        Red: numberRangeCheck(action.payload.colorValue),
                        shadows: calculateShadows(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        //  TODO refactor code background color calculation
                        codeBackgroundColor:`rgb(${calculateShadows(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[0]},
                            ${calculateShadows(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[1]},
                            ${calculateShadows(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[2]})`,
                        font: fontColor(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue
                        ),
                        codeFontColor: fontColor(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue
                        ),
                        hexColor: (toHex(numberRangeCheck(action.payload.colorValue))
                            +toHex(state.Green)+
                            toHex(state.Blue)
                        )
                    }
                case "Green":
                    return {
                        ...state,
                        Green: numberRangeCheck(action.payload.colorValue),
                        shadows: calculateShadows(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        //TODO refactor code background color calculation
                        codeBackgroundColor:`rgb(${calculateShadows(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[0]},
                            ${calculateShadows(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[1]},
                            ${calculateShadows(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[2]})`,
                        font: fontColor(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue
                        ),
                        codeFontColor: fontColor(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue
                        ),
                        hexColor: (
                            toHex(state.Red)+
                            toHex(numberRangeCheck(action.payload.colorValue))
                            +toHex(state.Blue)
                        )
                    }
                case "Blue":
                    return {
                        ...state,
                        Blue: numberRangeCheck(action.payload.colorValue),
                        shadows: calculateShadows(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        font: fontColor(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                        ),
                        codeFontColor: fontColor(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                        ),
                        //TODO refactor code background color calculation
                        codeBackgroundColor:`rgb(${calculateShadows(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[0]},
                            ${calculateShadows(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[1]},
                            ${calculateShadows(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[2]})`,
                        hexColor: (
                            toHex(state.Red)
                            +toHex(state.Green)+
                            toHex(numberRangeCheck(action.payload.colorValue))
                        )
                    }
                case "Hex":
                    let hexString = (action.payload.colorValue).replace(/#/, '')
                    if (isHexValid(hexString)){
                        return {
                            ...state,
                            hexColor: hexString,
                            Red: hexToRGB(hexString).Red,
                            Green: hexToRGB(hexString).Green,
                            Blue: hexToRGB(hexString).Blue,
                            shadows: calculateShadows(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                                state.lightShadowFactor,
                                state.darkShadowFactor),
                            //TODO refactor code background color calculation
                            codeBackgroundColor:`rgb(${calculateShadows(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                                state.lightShadowFactor,
                                state.darkShadowFactor).darkerShadowArray[0]},
                            ${calculateShadows(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                                state.lightShadowFactor,
                                state.darkShadowFactor).darkerShadowArray[1]},
                            ${calculateShadows(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                                state.lightShadowFactor,
                                state.darkShadowFactor).darkerShadowArray[2]})`,
                            font: fontColor(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                            ),
                            codeFontColor: fontColor(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                            )
                        }
                    } else return {
                        ...state,
                        hexColor: hexString,
                    }
                case "RGB":
                    console.log('payload', action.payload)
                    return {...state,
                        Red: action.payload.colorValue.Red,
                        Green: action.payload.colorValue.Green,
                        Blue: action.payload.colorValue.Blue,
                        shadows: calculateShadows(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        font: fontColor(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                        ),
                        codeFontColor: fontColor(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                        ),
                        //  TODO refactor code background color calculation
                        codeBackgroundColor:`rgb(${calculateShadows(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[0]},
                            ${calculateShadows(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[1]},
                            ${calculateShadows(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor).darkerShadowArray[2]})`,
                        hexColor: (
                            toHex(numberRangeCheck(action.payload.colorValue.Red))
                            +toHex(action.payload.colorValue.Green)+
                            toHex(action.payload.colorValue.Blue)
                        )
                    }
                default:
                    return state;
        }
        case CHANGE_SHADOW_BLUR:
            let blur = (value) => {
                    if (value> 300) {
                        return 300
                    } else if (value < 0) {
                        return 0
                    } else {
                        return value
                    }
            }
            return {
                ...state,
                shadowBlur: blur(action.payload)
            }
        case CHANGE_BORDER_RADIUS:
            let borderRadius = (value) => {
                if (value> 200) {
                    return 200
                } else if (value < 0) {
                    return 0
                } else {
                    return value
                }
            }
            return {
                ...state,
                borderRadius: borderRadius(action.payload)
            }
        case CHANGE_SHADOW_LENGTH:
            let shadowLength = (value) => {
                if (value> 150) {
                    return 150
                } else if (value < 0) {
                    return 0
                } else {
                    return value
                }
            }
            return {
                ...state,
                shadowLength: shadowLength(action.payload)
            }
        case CHANGE_DARK_SHADOW_FACTOR:
            return {
                ...state,
                darkShadowFactor: calculateShadowFactor(action.payload),
                shadows: calculateShadows(
                    state.Red,
                    state.Green,
                    state.Blue,
                    state.lightShadowFactor,
                    calculateShadowFactor(action.payload)),
            }
        case CHANGE_LIGHT_SHADOW_FACTOR:
            return {
                ...state,
                lightShadowFactor: calculateShadowFactor(action.payload),
                shadows: calculateShadows(
                    state.Red,
                    state.Green,
                    state.Blue,
                    calculateShadowFactor(action.payload),
                    state.darkShadowFactor)
            }
        case INVERSE_FONT:
            console.log('font before', state.font)
            console.log('font After',invertFont(state.font))
            return {
                ...state,
                font: invertFont(state.font)
            }
    }
};