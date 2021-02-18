import { getTintsAndShades, hexToRGB } from 'color-processing-library';

export class ComponentShadows {
    constructor(
        backgroundColor,
        sameColorShadow,
        shadowColorBase,
        darkShadowFactor,
        lightShadowFactor) {
        this.backgroundColor = backgroundColor;
        this.sameColorShadow = sameColorShadow;
        this.shadowColorBase =  shadowColorBase;
        this.darkShadowFactor = darkShadowFactor || 85;
        this.lightShadowFactor = lightShadowFactor || 105;
    }

    getShadows() {
        const { Red,Green,Blue } = hexToRGB(this.backgroundColor)

        const mainColorShadows = {
            dark: getTintsAndShades(Red, Green, Blue, this.darkShadowFactor),
            light: getTintsAndShades(Red, Green, Blue, this.lightShadowFactor)
        }

        if (this.sameColorShadow){
            return mainColorShadows
        }

        // TODO add check is shadowColorBase a Valid hexadecimal color
        else if (this.shadowColorBase !== undefined) {
            let {Red:red, Green: green, Blue: blue} = hexToRGB(this.shadowColorBase)
            return {
                dark: getTintsAndShades(red, green, blue,this.darkShadowFactor),
                light: getTintsAndShades(red, green, blue,this.lightShadowFactor)
            }
        }

        else return {
                dark: getTintsAndShades(255,255,255,this.darkShadowFactor),
                light: getTintsAndShades(255, 255, 255,this.lightShadowFactor)
            }
    }
}
