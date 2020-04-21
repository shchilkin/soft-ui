export function calculateShadows(Red, Green, Blue, LightShadowFactor, DarkShadowFactor) {
    function calculateColor(color, factor){
        let _color = color * factor;
        if(_color > 255) {
            return 255
        }
        else {
            return Math.round(_color)
        }
    }

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
export function fontColor(red, green, blue) {
    let luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue))/255;

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
    if (hexColor.length === 3) {
        return {
            Red: parseInt(`${hexColor.slice(0, 1)}${hexColor.slice(0, 1)}`, 16),
            Green: parseInt(`${hexColor.slice(1, 2)}${hexColor.slice(1, 2)}`, 16),
            Blue: parseInt(`${hexColor.slice(2, 3)}${hexColor.slice(2, 3)}`, 16)
        }
    }
    if (hexColor.length === 6){
        return {
            Red: parseInt(`${hexColor.slice(0, 2)}`, 16),
            Green: parseInt(`${hexColor.slice(2, 4)}`, 16),
            Blue: parseInt(`${hexColor.slice(4, 6)}`, 16)
        }
    }
}
export function isHexValid(hex) {
    return hex.length === 3 || hex.length === 6;
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