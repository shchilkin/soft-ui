import {calculateTintAndShades, hexToRGB} from "./Functions";

export class ComponentShadows {

    getShadows(backgroundColor ='#F0F0F0', sameColorShadow, shadowColorBase) {

        const { Red,Green,Blue } = hexToRGB(backgroundColor)

        const mainColorShadows = {
            dark: calculateTintAndShades(Red, Green, Blue),
            light: calculateTintAndShades(Red, Green, Blue,105)
        }

        if (sameColorShadow){
            return mainColorShadows
        }

        // TODO add check is shadowColorBase a Valid hexadecimal color
        else if (shadowColorBase !== undefined) {
            let {Red:red, Green: green, Blue: blue} = hexToRGB(shadowColorBase)
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
