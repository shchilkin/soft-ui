import ColorButton from "../../Layout/ColorButton";
import React, {Fragment, useContext} from "react";
import {calculateTintAndShades} from "../../../../../Functions";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";
import Badge from "../../../../Badge/Badge.component";


const SecondaryColorsPanel = () => {
    const themeContext = useContext(ThemeContext);
    const {colorRGB, font, shadows,changeSecondaryColor } = themeContext;

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

    const mainColorShades = {
        10: calculateTintAndShades(Red,Green,Blue,10),
        20: calculateTintAndShades(Red,Green,Blue,20),
        30: calculateTintAndShades(Red,Green,Blue,30),
        40: calculateTintAndShades(Red,Green,Blue,40),
        50: calculateTintAndShades(Red,Green,Blue,50),
        60: calculateTintAndShades(Red,Green,Blue,60),
        70: calculateTintAndShades(Red,Green,Blue,70),
        80: calculateTintAndShades(Red,Green,Blue,80),
        90: calculateTintAndShades(Red,Green,Blue,90)
    }

    const mainColorTints = {
        110: calculateTintAndShades(Red,Green,Blue,110),
        120: calculateTintAndShades(Red,Green,Blue,120),
        130: calculateTintAndShades(Red,Green,Blue,130),
        140: calculateTintAndShades(Red,Green,Blue,140),
        150: calculateTintAndShades(Red,Green,Blue,150),
        160: calculateTintAndShades(Red,Green,Blue,160),
        170: calculateTintAndShades(Red,Green,Blue,170),
        180: calculateTintAndShades(Red,Green,Blue,180),
        190: calculateTintAndShades(Red,Green,Blue,190)
    }

    // TODO !!! Remove map and return hardcoded ColorButtons
    // Array.map greatly reduces performance

    return(
        <Fragment>
            <Badge style={{ backgroundColor: darkerShadow }}>
                <span style={{color:font}}>Secondary colors</span>
            </Badge>
            <div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                    <Badge style={{ backgroundColor: darkerShadow, fontSize: '0.875rem', padding:'.15em .3em}'}}>
                        <span style={{color:font}}>Complementary</span>
                    </Badge>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["60"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["60"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["70"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["70"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["80"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["80"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["90"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["90"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["100"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["100"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["110"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["110"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["120"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["120"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["130"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["130"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={complementaryColorTintsAndShades["140"]}
                        onClick={() => changeSecondaryColor(complementaryColorTintsAndShades["140"])}
                        borderRadius={6}/>
                </div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                    <Badge style={{ backgroundColor: darkerShadow, fontSize: '0.675rem', padding:'.15em .3em}'}}>
                        <span style={{color:font}}>Primary color shades</span>
                    </Badge>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["10"]}
                        value={mainColorShades["10"]}
                        onClick={() => changeSecondaryColor(mainColorShades["10"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["20"]}
                        onClick={() => changeSecondaryColor(mainColorShades["20"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["30"]}
                        onClick={() => changeSecondaryColor(mainColorShades["30"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["40"]}
                        onClick={() => changeSecondaryColor(mainColorShades["40"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["50"]}
                        onClick={() => changeSecondaryColor(mainColorShades["50"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["60"]}
                        onClick={() => changeSecondaryColor(mainColorShades["60"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["70"]}
                        onClick={() => changeSecondaryColor(mainColorShades["70"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["80"]}
                        onClick={() => changeSecondaryColor(mainColorShades["80"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorShades["90"]}
                        onClick={() => changeSecondaryColor(mainColorShades["90"])}
                        borderRadius={6}/>
                </div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                    <Badge style={{ backgroundColor: darkerShadow, fontSize: '0.675rem', padding:'.15em .3em}'}}>
                        <span style={{color:font}}>Primary color tints</span>
                    </Badge>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['110']}
                        onClick={() => changeSecondaryColor(mainColorTints['110'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['120']}
                        onClick={() => changeSecondaryColor(mainColorTints['120'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['130']}
                        onClick={() => changeSecondaryColor(mainColorTints['130'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['140']}
                        onClick={() => changeSecondaryColor(mainColorTints['140'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['150']}
                        onClick={() => changeSecondaryColor(mainColorTints['150'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['160']}
                        onClick={() => changeSecondaryColor(mainColorTints['160'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['170']}
                        onClick={() => changeSecondaryColor(mainColorTints['170'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['180']}
                        onClick={() => changeSecondaryColor(mainColorTints['180'])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={mainColorTints['190']}
                        onClick={() => changeSecondaryColor(mainColorTints['190'])}
                        borderRadius={6}/>

                </div>
            </div>
        </Fragment>
    )
}

export default SecondaryColorsPanel;