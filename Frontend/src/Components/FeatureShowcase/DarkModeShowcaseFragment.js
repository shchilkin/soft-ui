import React, {Fragment, useContext, useState} from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import {calculateTintAndShades, fontColor, hexToRGB} from "../../Functions";
import Card from "../Generator/Generator_Components/Layout/Card";
import Input from "../Generator/Generator_Components/Layout/Input";
import ShowcaseContext from "../../contexts/showcase/ShowcaseContext";


const DarkModeShowcaseFragment = () => {
    const themeContext = useContext(ThemeContext);
    const {colorRGB, darkShadowFactor,lightShadowFactor} = themeContext;
    const {Red, Green, Blue} = colorRGB

    const showcaseContext = useContext(ShowcaseContext);
    const { changeDarkModeColor } = showcaseContext;


    const [darkModeFactor ,setFactor] = useState(40);


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

    const onChangeFactor = (event) => {
        setFactor(event.target.value)
        changeDarkModeColor(darkModeBackground)
    }

    const DarkModeCard = (
            <Card
                background={darkModeBackground}
                darkShadow={darkModeDarkShadow}
                lightShadow={darkModeLightShadow}
                color={darkModeFont}
            >
                <h6 style={{fontSize:'1.05rem'}}>Automatic{" "}
                    {isDarkModeMoreThan100(darkModeFactor) ? 'darkmode' : 'lightmode'} generation.
                </h6>
                <h6 style={{fontSize: '0.8rem', marginBottom:'1.2rem'}}>
                    {darkModeFactor}% of the background color
                </h6>
                <span style={{
                    fontSize: '0.9rem',
                    marginBottom:'1.2rem'}}
                >Hi! 👋 I am a {isDarkModeMoreThan100(darkModeFactor) ? 'dark' : 'light'} mode card!</span>
                <br/>

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
    )

    return (
        <Fragment>
            {DarkModeCard}
        </Fragment>
    )
}

export default DarkModeShowcaseFragment;