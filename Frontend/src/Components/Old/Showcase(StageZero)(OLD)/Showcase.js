import React, {Fragment, useContext, useState} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import Card from "../../Updated/Card";
import {calculateTintAndShades, hexToRGB, fontColor} from "../../../Functions";
import Input from "../../Generator/Generator_Components/Layout/Input/Input";
import ColorShowcaseCard from "./ColorShowcaseCard";
import ReactCard from "./ReactCard";
import ColorButton from "../../Generator/Generator_Components/Layout/ColorButton";


const Showcase = () => {
    const themeContext = useContext(ThemeContext);

    const {colorRGB, darkShadowFactor, shadows,shadowLength, lightShadowFactor, shadowBlur} = themeContext;
    const {Red, Green, Blue} = colorRGB


    const [darkModeFactor ,setFactor] = useState(40);
    const [activeWindow, setActiveWindow] = useState(1)

    const darkShadow = `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`
    const lightShadow = `rgb(${shadows.ligherShadowArray[0]},${shadows.ligherShadowArray[1]},${shadows.ligherShadowArray[2]})`

    const darkmodeDarkShadowFactor = Math.round(darkModeFactor * .75);
    const darkmodeLightShadowFactor = Math.round(darkModeFactor * .9);
    const darkModeBackground = calculateTintAndShades(Red, Green, Blue, darkModeFactor);
    const darkModeDarkShadow = calculateTintAndShades(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Blue,
        Math.round(darkShadowFactor * 100))
    console.log('darkModeFactor',darkModeFactor)
    const darkModeLightShadow = calculateTintAndShades(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeLightShadowFactor)).Blue,
        Math.round(lightShadowFactor * 100)
    )
    const darkModeFont = fontColor(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkmodeDarkShadowFactor)).Blue
    )

    const isDarkModeMoreThan100 = (darkModeFactor) => {
        if (darkModeFactor > 100){
            return false
        } else if (darkModeFactor <= 100){
            return true
        }
    }

    const onChangeFactor = (event) => setFactor(event.target.value)

    const DarkModeCard = (
        <Card
            background={darkModeBackground}
            style={{
                height:'400px',
                //TODO FIX box shadow
                boxShadow: `${darkModeDarkShadow} 5px 5px ${shadowBlur}px 0px inset,
                ${darkModeLightShadow} -5px -5px ${shadowBlur}px 0px inset`,
                display:'flex',justifyContent:'center', alignItems:'center'
            }}
        >
            <Card
                background={darkModeBackground}
                darkShadow={darkModeDarkShadow}
                lightShadow={darkModeLightShadow}
                color={darkModeFont}
                style={{marginRight:'2rem',marginLeft:'2rem'}}
            >
                <h6 style={{fontSize:'1.05rem'}}>Automatic{" "}
                    {isDarkModeMoreThan100(darkModeFactor) ? 'darkmode' : 'lightmode'} generation.
                </h6>
                Hi! 👋 I am a {isDarkModeMoreThan100(darkModeFactor) ? 'dark' : 'light'} mode card!
                <br/>
                {darkModeFactor}% of the background color

                {/*TODO if 100% return "Hi I am darkmode card but currently my color is the same as the main color 😜"*/}
                <div>
                <label>Change %</label>
                <Input
                    style={{marginLeft:'10px',marginTop:'1.2rem',height:'35px',borderRadius:'6px',width:'50%'}}
                    type={'number'}
                    background={darkModeBackground}
                    darkShadow={darkModeDarkShadow}
                    lightShadow={darkModeLightShadow}
                    color={darkModeFont}
                    value={darkModeFactor}
                    onChange={event => onChangeFactor(event)}
                    placeholder={'Enter value'}
                />
                </div>
            </Card>
        </Card>
    )

    const showCaseWindowWrapper = (activeWindow) => {
        switch (activeWindow) {
            case 0:
                return DarkModeCard;
            case 1:
                return <ColorShowcaseCard />
            case 2:
                return <ReactCard />
            default:
                return null
        }
    }

    let multiplier = 0.65

    return (
        <Fragment>
            <Card type={"top"}>
                {showCaseWindowWrapper(activeWindow)}
            </Card>
            <Card
                type={'bottom'}
                style={{display:'flex',justifyContent:'center', alignItems:'center',}}
            >
                <ColorButton
                    active={activeWindow === 0}
                    borderRadius={'50'}
                    width={20}
                    height={20}
                    mainColor={`rgb(${Math.round(Red* multiplier)},${Math.round(Green* multiplier)},${Math.round(Blue* multiplier)})`}
                    lighterShadow={lightShadow}
                    darkerShadow={darkShadow}
                    shadowLength={shadowLength}
                    blur={shadowBlur}
                    onClick={() => setActiveWindow(0)}
                />
                <ColorButton
                    active={activeWindow === 1}
                    borderRadius={'50'}
                    width={20}
                    height={20}
                    mainColor={'#ed2939'}
                    // mainColor={`rgb(${Math.round(Red* multiplier)},${Math.round(Green* multiplier)},${Math.round(Blue* multiplier)})`}
                    lighterShadow={lightShadow}
                    darkerShadow={darkShadow}
                    shadowLength={shadowLength}
                    blur={shadowBlur}
                    onClick={() => setActiveWindow(1)}
                />
                <ColorButton
                    active={activeWindow === 2}
                    borderRadius={'50'}
                    width={20}
                    height={20}
                    mainColor={'#61DAFB'}
                    // mainColor={`rgb(${Math.round(Red * multiplier)},${Math.round(Green* multiplier)},${Math.round(Blue* multiplier)})`}
                    lighterShadow={lightShadow}
                    darkerShadow={darkShadow}
                    shadowLength={shadowLength}
                    blur={shadowBlur}
                    onClick={() => setActiveWindow(2)}
                />
            </Card>
        </Fragment>
    )
}

export default Showcase;