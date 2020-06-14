import {calculateTintAndShades, hexToRGB} from "./Functions";

export class ComponentShadows {
    constructor(backgroundColor, sameColorShadow, shadowColorBase) {
        this.backgroundColor = backgroundColor;
        this.sameColorShadow = sameColorShadow;
        this.shadowColorBase =  shadowColorBase;
    }

    getShadows() {
        const { Red,Green,Blue } = hexToRGB(this.backgroundColor)

        const mainColorShadows = {
            dark: calculateTintAndShades(Red, Green, Blue),
            light: calculateTintAndShades(Red, Green, Blue,105)
        }

        if (this.sameColorShadow){
            return mainColorShadows
        }

        // TODO add check is shadowColorBase a Valid hexadecimal color
        else if (this.shadowColorBase !== undefined) {
            let {Red:red, Green: green, Blue: blue} = hexToRGB(this.shadowColorBase)
            return {
                dark: calculateTintAndShades(red, green, blue),
                light: calculateTintAndShades(red, green, blue,105)
            }
        }

        else return {
                dark: calculateTintAndShades(255,255,255),
                light: calculateTintAndShades(255, 255, 255,105)
            }
    }
}
