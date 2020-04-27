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
export function generateTintAndShades(red, green, blue) {
    return {
        tints: {
            '110': `rgb(${calculateColor(red, 1.10)},${calculateColor(green, 1.10)}, ${calculateColor(blue, 1.10)})`,
            '120': `rgb(${calculateColor(red, 1.20)},${calculateColor(green, 1.20)}, ${calculateColor(blue, 1.20)})`,
            '130': `rgb(${calculateColor(red, 1.30)},${calculateColor(green, 1.30)}, ${calculateColor(blue, 1.30)})`,
            '140': `rgb(${calculateColor(red, 1.40)},${calculateColor(green, 1.40)}, ${calculateColor(blue, 1.40)})`,
            '150': `rgb(${calculateColor(red, 1.50)},${calculateColor(green, 1.50)}, ${calculateColor(blue, 1.50)})`,
            '160': `rgb(${calculateColor(red, 1.60)},${calculateColor(green, 1.60)}, ${calculateColor(blue, 1.60)})`,
            '170': `rgb(${calculateColor(red, 1.70)},${calculateColor(green, 1.70)}, ${calculateColor(blue, 1.70)})`,
            '180': `rgb(${calculateColor(red, 1.80)},${calculateColor(green, 1.80)}, ${calculateColor(blue, 1.80)})`,
            '190': `rgb(${calculateColor(red, 1.90)},${calculateColor(green, 1.90)}, ${calculateColor(blue, 1.90)})`,
            '200': `rgb(${calculateColor(red, 2.00)},${calculateColor(green, 2.00)}, ${calculateColor(blue, 2.00)})`,
        },
        baseColor:{
            '100':`rgb(${red},${green},${blue})`},
        shades: {
            '0':  `rgb(${calculateColor(red, 0)},${calculateColor(green, 0)}, ${calculateColor(blue, 0)})`,
            '10': `rgb(${calculateColor(red, .10)},${calculateColor(green, .10)}, ${calculateColor(blue, .10)})`,
            '20': `rgb(${calculateColor(red, .20)},${calculateColor(green, .20)}, ${calculateColor(blue, .20)})`,
            '30': `rgb(${calculateColor(red, .30)},${calculateColor(green, .30)}, ${calculateColor(blue, .30)})`,
            '40': `rgb(${calculateColor(red, .40)},${calculateColor(green, .40)}, ${calculateColor(blue, .40)})`,
            '50': `rgb(${calculateColor(red, .50)},${calculateColor(green, .50)}, ${calculateColor(blue, .50)})`,
            '60': `rgb(${calculateColor(red, .60)},${calculateColor(green, .60)}, ${calculateColor(blue, .60)})`,
            '70':  `rgb(${calculateColor(red, .70)},${calculateColor(green, .70)}, ${calculateColor(blue, .70)})`,
            '80':  `rgb(${calculateColor(red, .80)},${calculateColor(green, .80)}, ${calculateColor(blue, .80)})`,
            '90':  `rgb(${calculateColor(red, .90)},${calculateColor(green, .90)}, ${calculateColor(blue, .90)})`,
        }
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

    if (hexColor.length === 7){
        return {
            Red: parseInt(`${hexColor.slice(1, 3)}`, 16),
            Green: parseInt(`${hexColor.slice(3, 5)}`, 16),
            Blue: parseInt(`${hexColor.slice(5, 7)}`, 16)
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
export function invertFont(font) {
    if (font === '#000' || font === '#000000'){
        return '#FFF'
    }   else if (font === '#FFF' || font === '#FFFFFF'){
        return '#000'
    }
}