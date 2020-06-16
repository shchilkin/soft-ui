import {
    CHANGE_COLOR,
    CHANGE_THEME,
    CHANGE_SHADOW_BLUR,
    CHANGE_BORDER_RADIUS,
    CHANGE_SHADOW_LENGTH,
    CHANGE_DARK_SHADOW_FACTOR,
    CHANGE_LIGHT_SHADOW_FACTOR,
    INVERSE_FONT,
    THEME_RESET,
    CHANGE_BADGE_COLORS,
    CHANGE_SECONDARY_COLOR,
    CHANGE_DARK_MODE_FACTOR,
    CHANGE_DARK_MODE_DARK_SHADOW_FACTOR,
    CHANGE_DARK_MODE_LIGHT_SHADOW_FACTOR
} from '../types';
import {
    getTintsAndShades,
    getFontColor,
    toHex,
    isHexColorValid,
    hexToRGB
} from 'color-processing-library';
import {
    calculateColors, invertFont,
    calculateShadows,
    numberRangeCheck,
    calculateShadowFactor
}from '../../Functions';
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
                        font: getFontColor(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue
                        ),
                        codeFontColor: getFontColor(
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
                        font: getFontColor(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue
                        ),
                        codeFontColor: getFontColor(
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
                        font: getFontColor(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                        ),
                        codeFontColor: getFontColor(
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
                case "HEX":
                    let hexString = (action.payload.colorValue).replace(/#/, '')
                    if (isHexColorValid(hexString)){
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
                            font: getFontColor(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                            ),
                            codeFontColor: getFontColor(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                            )
                        }
                    } else return {
                        ...state,
                        hexColor: hexString,
                    }
                    //Case RGB currently used on random color generation
                case "RGB":
                    let rgbArray=  {
                        red: action.payload.colorValue.Red,
                        green: action.payload.colorValue.Green,
                        blue: action.payload.colorValue.Blue,
                    }
                    const {red,  green, blue} = rgbArray
                    const {red: r, green: g, blue: b} = calculateColors(rgbArray)
                    console.log('RED GREEN BLUE', r, g, b)
                    const colors = {
                        'complementary-60': getTintsAndShades(r,g,b,60),
                        'complementary-70': getTintsAndShades(r,g,b,70),
                        'complementary-80':getTintsAndShades(r,g,b,80),
                        'complementary-90': getTintsAndShades(r,g,b,90),
                        'complementary-100': getTintsAndShades(r,g,b,100),
                        'complementary-110': getTintsAndShades(r,g,b,110),
                        'complementary-120': getTintsAndShades(r,g,b,120),
                        'complementary-130': getTintsAndShades(r,g,b,130),
                        'complementary-140': getTintsAndShades(r,g,b,140),
                        'main-10': getTintsAndShades(red,green,blue,10),
                        'main-20': getTintsAndShades(red,green,blue,20),
                        'main-30': getTintsAndShades(red,green,blue,30),
                        'main-40': getTintsAndShades(red,green,blue,40),
                        'main-50': getTintsAndShades(red,green,blue,50),
                        'main-60': getTintsAndShades(red,green,blue,60),
                        'main-70': getTintsAndShades(red,green,blue,70),
                        'main-80': getTintsAndShades(red,green,blue,80),
                        'main-90': getTintsAndShades(red,green,blue,90),
                        'main-110': getTintsAndShades(red,green,blue,110),
                        'main-120': getTintsAndShades(red,green,blue,120),
                        'main-130': getTintsAndShades(red,green,blue,130),
                        'main-140': getTintsAndShades(red,green,blue,140),
                        'main-150': getTintsAndShades(red,green,blue,150),
                        'main-160': getTintsAndShades(red,green,blue,160),
                        'main-170': getTintsAndShades(red,green,blue,170),
                        'main-180': getTintsAndShades(red,green,blue,180),
                        'main-190': getTintsAndShades(red,green,blue,190)
                    }

                    console.log('colors[state.secondaryColor]',colors[state.secondaryColor], state.secondaryColor)

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
                        font: getFontColor(
                            action.payload.colorValue.Red,
                            action.payload.colorValue.Green,
                            action.payload.colorValue.Blue,
                        ),
                        codeFontColor: getFontColor(
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
                        ),
                        secondaryColorValue: colors[state.secondaryColor]
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
        case THEME_RESET:
            let red = 255;
            let green = 255;
            let blue = 255;
            return {
                ...state,
                Red: red,
                Green: green,
                Blue: blue,
                shadowBlur: 30,
                shadowLength: 5,
                borderRadius: 12,
                darkShadowFactor: 0.85,
                lightShadowFactor: 1.05,
                hexColor: (toHex(red) + toHex(green) + toHex(blue)),
                font: getFontColor(red, green, blue),
                codeFontColor: getFontColor(red, green,blue ),
                shadows: calculateShadows(red,green,blue,1.05,0.85),
                codeBackgroundColor: "#125B37",
            }
        case CHANGE_BADGE_COLORS:
            return {
                ...state,
                badgeColors: action.payload
            }
        case CHANGE_DARK_MODE_FACTOR:
            return {
                ...state,
                darkModeFactor: calculateShadowFactor(action.payload)
            }
        case CHANGE_DARK_MODE_DARK_SHADOW_FACTOR:
            console.log('Dark shadow', action.payload)
            return {
                ...state,
                darkModeDarkShadowFactor: calculateShadowFactor(action.payload),
            }
        case CHANGE_DARK_MODE_LIGHT_SHADOW_FACTOR:
            console.log('Light shadow', action.payload)
            return {
                ...state,
                darkModeLightShadowFactor: calculateShadowFactor(action.payload),
            }
        case CHANGE_SECONDARY_COLOR:
            console.log('Action payload',action.payload)
            return {
                ...state,
                secondaryColor: action.payload.colorCode,
                secondaryColorValue: action.payload.colorValue
            }
    }
};