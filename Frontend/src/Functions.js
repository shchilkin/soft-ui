export function calculateColor(color, factor){
    let _color = color * factor;
    if(_color > 255) {
        return 255
    }
    else {
        return Math.round(_color)
    }
}
export function calculateShadows(Red, Green, Blue, LightShadowFactor, DarkShadowFactor) {
    return {
        ligherShadowArray: [
            calculateColor(Red, LightShadowFactor),
            calculateColor(Green, LightShadowFactor),
            calculateColor(Blue, LightShadowFactor)
        ],
        darkerShadowArray: [
            calculateColor(Red, DarkShadowFactor),
            calculateColor(Green, DarkShadowFactor),
            calculateColor(Blue, DarkShadowFactor)
        ]
    }
}
// TODO refactor calculateShadows because calculateShadows and calculateTintAndShades have similar functionality
export function calculateTintAndShades(red, green, blue, factor = 85,outputMode = 'hex') {
    let _factor = factor / 100;
    switch (outputMode) {
        case "rgb":
            return `rgb(${calculateColor(red, _factor)},
            ${calculateColor(green, _factor)},
            ${calculateColor(blue, _factor)}`
        default:
        case "hex":
            let hexRed = toHex(calculateColor(red, _factor));
            let hexGreen = toHex(calculateColor(green, _factor));
            let hexBlue = toHex(calculateColor(blue, _factor))
            return `#${hexRed}${hexGreen}${hexBlue}`
    }
}
export function fontColor(red, green, blue) {
    let luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue))/255;

    if (luminance > 0.5) {
        return "#000"
    } else {
        return "#FFF"
    }
}
export function fontColorHex(Hex) {
    const {Red, Green, Blue} = hexToRGB(Hex);

    let luminance = ((0.299 * Red) + (0.587 * Green) + (0.114 * Blue))/255;

    if (luminance > 0.5) {
        return "#000"
    } else {
        return "#FFF"
    }
}
export function toHex(colorValue){
    let color
    if (colorValue <= 15) {
        color = `0${Number(colorValue).toString(16).toUpperCase()}`
    } else {
        color = `${Number(colorValue).toString(16).toUpperCase()}`
    }
    return color;
}
export function hexToRGB(hexColor) {
    let hexWithoutHash = hexColor.replace('#','')
    if (hexWithoutHash.length === 3) {
        return {
            Red: parseInt(`${hexWithoutHash.slice(0, 1)}${hexWithoutHash.slice(0, 1)}`, 16),
            Green: parseInt(`${hexWithoutHash.slice(1, 2)}${hexWithoutHash.slice(1, 2)}`, 16),
            Blue: parseInt(`${hexWithoutHash.slice(2, 3)}${hexWithoutHash.slice(2, 3)}`, 16)
        }
    }
    if (hexWithoutHash.length === 6){
        return {
            Red: parseInt(`${hexWithoutHash.slice(0, 2)}`, 16),
            Green: parseInt(`${hexWithoutHash.slice(2, 4)}`, 16),
            Blue: parseInt(`${hexWithoutHash.slice(4, 6)}`, 16)
        }
    }

    else return "Invalid Hex code value"
}
export function isHexValid(hex, checkWithHash = false) {
    // TODO Check hex only with hash

    let hexRegExp = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    let hexRegExpWithHash = /(^#[0-9A-Fa-f]{6})|(^#[0-9A-Fa-f]{3})/; // with #

    const checkCondition = checkWithHash ? hex.match(hexRegExpWithHash) : hex.match(hexRegExp);

    return checkCondition !== null;
}
export function numberRangeCheck(colorValue) {
    if (parseInt(colorValue) > 255) {
        return 255
    } else if (parseInt(colorValue) < 0) {
        return 0
    } else {
        return parseInt(colorValue)
    }
}
export function calculateShadowFactor(number) {
    let factor = parseInt(number) / 100
    if (factor > 2) {
        return 2
    } else if (factor < 0) {
        return 0
    } else {
        return factor
    }
}
export function getRandomInt(maximumNumber) {
    return Math.floor(Math.random() * Math.floor(maximumNumber+1));
}
export function invertFont(font) {
    if (font === '#000' || font === '#000000'){
        return '#FFF'
    }   else if (font === '#FFF' || font === '#FFFFFF'){
        return '#000'
    }
}
export function calculateColors(color, mode='complimentary') {
    switch (mode) {
        case "complimentary":
            if (typeof(color) === "object"){
                return {
                    red: (255 - color.Red || 255 - color.red),
                    green: (255 - color.Green || 255 - color.green),
                    blue: (255 - color.Blue || 255 - color.blue)
                }
            }
            else if (typeof(color) === "string"){
                let {Red, Green, Blue} = hexToRGB(color)
                return `#${toHex(255-Red)}${toHex(255-Green)}${toHex(255-Blue)}`
            }
    }
    //TODO add other cases | generate tones, shades and maybe more...
}