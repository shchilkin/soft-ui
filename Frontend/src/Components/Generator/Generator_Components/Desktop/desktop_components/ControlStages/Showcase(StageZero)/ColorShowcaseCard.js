import Card from "../../../../Layout/Card";
import ColorButton from "../../../../Layout/ColorButton";
import React, {useContext} from "react";
import ThemeContext from "../../../../../../../contexts/theme/ThemeContext";
import {calculateTintAndShades,hexToRGB, fontColor} from "../../../../../../../Functions";
import ColorShowcaseContext from "../../../../../../../contexts/colorShowcase/ColorShowcaseContext";

const ColorShowcaseCard = () => {
    const themeContext = useContext(ThemeContext);
    const { shadowBlur,shadowLength} = themeContext;

    const colorShowcaseContext = useContext(ColorShowcaseContext)
    const {backgroundColor} = colorShowcaseContext;

    const primaryBackgroundRGB = hexToRGB(backgroundColor)

    const font = fontColor(primaryBackgroundRGB.Red,
        primaryBackgroundRGB.Green,
        primaryBackgroundRGB.Blue)

    const darkShadow = calculateTintAndShades(
        primaryBackgroundRGB.Red,
        primaryBackgroundRGB.Green,
        primaryBackgroundRGB.Blue,
        85)

    const lightShadow = calculateTintAndShades(
        primaryBackgroundRGB.Red,
        primaryBackgroundRGB.Green,
        primaryBackgroundRGB.Blue,
        105)

    return(
        <Card
            background={backgroundColor}
            color={font}
            style={{
                boxShadow: `${darkShadow} 5px 5px ${shadowBlur}px 0px inset,
                ${lightShadow} -5px -5px ${shadowBlur}px 0px inset`,
                border:'none',
                height:'300px',
                display:'flex', justifyContent:'center', alignItems:'center',flexWrap: 'wrap'
            }}
        >
            <Card
                background={backgroundColor}
                color={font}
                lightShadow={lightShadow}
                darkShadow={darkShadow}
                style={{marginRight:'3rem',marginLeft:'3rem'}}
            >
                <h6 style={{fontSize:'1.05rem'}}>
                    Works with every color!
                </h6>
                <span style={{
                    fontSize: '0.9rem',
                    marginBottom:'1.2rem'}}
                >
                    Use preset colors or use your favorite one(TODO)
                </span>
            </Card>
            <Card
                background={backgroundColor}
                color={font}
                lightShadow={lightShadow}
                darkShadow={darkShadow}
                style={{marginRight:'2rem',marginLeft:'2rem'}}
            >
                <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#ED2939'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#F46036'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#F3FFB6'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#6FD08C'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#5CA173'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#26CBD8'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#07BEB8'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#F5D3C8'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#8F3985'}/>
                    <ColorButton
                        lighterShadow={lightShadow}
                        darkerShadow={darkShadow}
                        shadowLength={shadowLength}
                        blur={shadowBlur}
                        background={"#FFF"}
                        mainColor={'#DF2687'}/>
                </div>
            </Card>
        </Card>
    )
}

export default ColorShowcaseCard;