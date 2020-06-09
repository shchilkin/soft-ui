import ColorButton from "./Layout/ColorButton";
import React, {Fragment, useContext} from "react";
import {calculateTintAndShades, calculateColors} from "../../../Functions";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import Badge from "../../Badge/Badge.component";


const SecondaryColorsPanel = () => {
    const themeContext = useContext(ThemeContext);
    const {colorRGB, font, shadows, changeSecondaryColor } = themeContext;

    const darkerShadows = shadows.darkerShadowArray;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;
    const {Red, Green, Blue} = colorRGB;

    //TODO refactor  | Get calculated colors from context
    const {red, green, blue} = calculateColors(colorRGB)
    const colors = {
        'complementary-60': calculateTintAndShades(red,green,blue,60),
        'complementary-70': calculateTintAndShades(red,green,blue,70),
        'complementary-80':calculateTintAndShades(red,green,blue,80),
        'complementary-90': calculateTintAndShades(red,green,blue,90),
        'complementary-100': calculateTintAndShades(red,green,blue,100),
        'complementary-110': calculateTintAndShades(red,green,blue,110),
        'complementary-120': calculateTintAndShades(red,green,blue,120),
        'complementary-130': calculateTintAndShades(red,green,blue,130),
        'complementary-140': calculateTintAndShades(red,green,blue,140),
        'main-10': calculateTintAndShades(Red,Green,Blue,10),
        'main-20': calculateTintAndShades(Red,Green,Blue,20),
        'main-30': calculateTintAndShades(Red,Green,Blue,30),
        'main-40': calculateTintAndShades(Red,Green,Blue,40),
        'main-50': calculateTintAndShades(Red,Green,Blue,50),
        'main-60': calculateTintAndShades(Red,Green,Blue,60),
        'main-70': calculateTintAndShades(Red,Green,Blue,70),
        'main-80': calculateTintAndShades(Red,Green,Blue,80),
        'main-90': calculateTintAndShades(Red,Green,Blue,90),
        'main-110': calculateTintAndShades(Red,Green,Blue,110),
        'main-120': calculateTintAndShades(Red,Green,Blue,120),
        'main-130': calculateTintAndShades(Red,Green,Blue,130),
        'main-140': calculateTintAndShades(Red,Green,Blue,140),
        'main-150': calculateTintAndShades(Red,Green,Blue,150),
        'main-160': calculateTintAndShades(Red,Green,Blue,160),
        'main-170': calculateTintAndShades(Red,Green,Blue,170),
        'main-180': calculateTintAndShades(Red,Green,Blue,180),
        'main-190': calculateTintAndShades(Red,Green,Blue,190)
    }

    // Array.map greatly reduces performance
    return(
        <Fragment>
            <Badge background={darkerShadow}>
                <span style={{color:font}}>Secondary colors</span>
            </Badge>
            <div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                    <Badge background={darkerShadow} style={{fontSize: '0.675rem', padding:'.15em .3em}'}}>
                        <span style={{color:font}}>Complementary</span>
                    </Badge>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-60"]}
                        onClick={() => changeSecondaryColor('complementary-60',colors["complementary-60"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-70"]}
                        onClick={() => changeSecondaryColor('complementary-70',colors["complementary-70"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-80"]}
                        onClick={() => changeSecondaryColor('complementary-80',colors["complementary-80"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-90"]}
                        onClick={() => changeSecondaryColor('complementary-90',colors["complementary-90"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-100"]}
                        onClick={() => changeSecondaryColor('complementary-100',colors["complementary-100"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-110"]}
                        onClick={() => changeSecondaryColor('complementary-110',colors["complementary-110"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-120"]}
                        onClick={() => changeSecondaryColor('complementary-120',colors["complementary-120"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-130"]}
                        onClick={() => changeSecondaryColor('complementary-130',colors["complementary-130"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["complementary-140"]}
                        onClick={() => changeSecondaryColor('complementary-140',colors["complementary-140"])}
                        borderRadius={6}/>
                </div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                    <Badge  background={darkerShadow} style={{fontSize: '0.675rem', padding:'.15em .3em}'}}>
                        <span style={{color:font}}>Primary color shades</span>
                    </Badge>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-10"]}
                        onClick={() => changeSecondaryColor('main-10',colors["main-10"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-20"]}
                        onClick={() => changeSecondaryColor('main-20',colors["main-20"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-30"]}
                        onClick={() => changeSecondaryColor('main-30',colors["main-30"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-40"]}
                        onClick={() => changeSecondaryColor('main-40',colors["main-50"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-50"]}
                        onClick={() => changeSecondaryColor('main-50',colors["main-50"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-60"]}
                        onClick={() => changeSecondaryColor('main-60',colors["main-60"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-70"]}
                        onClick={() => changeSecondaryColor('main-70',colors["main-70"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-80"]}
                        onClick={() => changeSecondaryColor('main-80',colors["main-80"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-90"]}
                        onClick={() => changeSecondaryColor('main-90',colors["main-90"])}
                        borderRadius={6}/>
                </div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                    <Badge
                        background={darkerShadow}
                        style={{fontSize: '0.675rem', padding:'.15em .3em}'}}>
                        <span style={{color:font}}>Primary color tints</span>
                    </Badge>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-110"]}
                        onClick={() => changeSecondaryColor('main-110',colors["main-110"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-120"]}
                        onClick={() => changeSecondaryColor('main-120',colors["main-120"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-130"]}
                        onClick={() => changeSecondaryColor('main-130',colors["main-130"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-140"]}
                        onClick={() => changeSecondaryColor('main-140',colors["main-140"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-150"]}
                        onClick={() => changeSecondaryColor('main-150',colors["main-150"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-160"]}
                        onClick={() => changeSecondaryColor('main-160',colors["main-160"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-170"]}
                        onClick={() => changeSecondaryColor('main-170',colors["main-170"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-180"]}
                        onClick={() => changeSecondaryColor('main-180',colors["main-180"])}
                        borderRadius={6}/>
                    <ColorButton
                        width={28}
                        height={28}
                        mainColor={colors["main-190"]}
                        onClick={() => changeSecondaryColor('main-190',colors["main-190"])}
                        borderRadius={6}/>
                </div>
            </div>
        </Fragment>
    )
}

export default SecondaryColorsPanel;