import Card from "../../Layout/Card";
import ColorButton from "../../Layout/ColorButton";
import React, {useContext} from "react";
import {calculateTintAndShades} from "../../../../../Functions";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";
import Badge from "../../../../Badge/Badge.component";


const SecondaryColorsPanel = () => {
    const themeContext = useContext(ThemeContext);
    const {colorRGB, font, shadows } = themeContext;

    const darkerShadows = shadows.darkerShadowArray;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;
    const {Red, Green, Blue} = colorRGB;

    function calculateColors(color, mode='complimentary') {
        return {red: (255 - color.Red), green: (255 - color.Green), blue: (255 - color.Blue)}
    }

    const {red, green, blue} = calculateColors(colorRGB)
    console.log('complimentary color', calculateColors(colorRGB) )

    const complementaryColorTintsAndShades = {
        60: calculateTintAndShades(red,green,blue,60),
        70: calculateTintAndShades(red,green,blue,70),
        80:calculateTintAndShades(red,green,blue,80),
        90: calculateTintAndShades(red,green,blue,90),
        100: calculateTintAndShades(red,green,blue,100),
        110: calculateTintAndShades(red,green,blue,110),
        120: calculateTintAndShades(red,green,blue,120),
        130: calculateTintAndShades(red,green,blue,130),
        140: calculateTintAndShades(red,green,blue,140),}
    const complementaryColor = [
        complementaryColorTintsAndShades["60"],
        complementaryColorTintsAndShades["70"],
        complementaryColorTintsAndShades["80"],
        complementaryColorTintsAndShades["90"],
        complementaryColorTintsAndShades["100"],
        complementaryColorTintsAndShades["110"],
        complementaryColorTintsAndShades["120"],
        complementaryColorTintsAndShades["130"],
        complementaryColorTintsAndShades["140"],
    ]

    const mainColorShades = {
        20: calculateTintAndShades(Red,Green,Blue,20),
        30: calculateTintAndShades(Red,Green,Blue,30),
        40:calculateTintAndShades(Red,Green,Blue,40),
        50: calculateTintAndShades(Red,Green,Blue,50),
        60: calculateTintAndShades(Red,Green,Blue,60),
        70: calculateTintAndShades(Red,Green,Blue,70),
        80: calculateTintAndShades(Red,Green,Blue,80),
        90: calculateTintAndShades(Red,Green,Blue,90)
    }
    const mainColorShadesArray = [
        mainColorShades["20"],
        mainColorShades["30"],
        mainColorShades["40"],
        mainColorShades["50"],
        mainColorShades["60"],
        mainColorShades["70"],
        mainColorShades["80"],
        mainColorShades["90"],
    ]

    const mainColorTints = {
        110: calculateTintAndShades(Red,Green,Blue,110),
        120: calculateTintAndShades(Red,Green,Blue,120),
        130: calculateTintAndShades(Red,Green,Blue,130),
        140: calculateTintAndShades(Red,Green,Blue,140),
        150: calculateTintAndShades(Red,Green,Blue,150),
        160: calculateTintAndShades(Red,Green,Blue,160),
        170: calculateTintAndShades(Red,Green,Blue,170),
        180: calculateTintAndShades(Red,Green,Blue,180)
    }
    const mainColorTintsArray = [
        mainColorTints["110"],
        mainColorTints["120"],
        mainColorTints["130"],
        mainColorTints["140"],
        mainColorTints["150"],
        mainColorTints["160"],
        mainColorTints["170"],
        mainColorTints["180"],
    ]


    return(
        <div>
            <Badge style={{ backgroundColor: darkerShadow }}>
                <span style={{color:font}}>Secondary colors</span>
            </Badge>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                <Badge style={{ backgroundColor: darkerShadow }}>
                    <span style={{color:font}}>Complementary</span>
                </Badge>
                {complementaryColor.map(
                    color =>  <ColorButton
                        width={28}
                        height={28}
                        mainColor={color}
                        borderRadius={6}/>
                )}
            </div>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                <Badge style={{ backgroundColor: darkerShadow }}>
                    <span style={{color:font}}>Shades</span>
                </Badge>
                {mainColorShadesArray.map(
                    color =>  <ColorButton
                        width={43}
                        height={43}
                        mainColor={color}
                        borderRadius={12}/>
                )}
            </div>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                <Badge style={{ backgroundColor: darkerShadow }}>
                    <span style={{color:font}}>Tints</span>
                </Badge>
                {mainColorTintsArray.map(
                    color =>  <ColorButton
                        width={43}
                        height={43}
                        mainColor={color}
                        borderRadius={12}/>
                )}
            </div>
        </div>
    )
}

export default SecondaryColorsPanel;