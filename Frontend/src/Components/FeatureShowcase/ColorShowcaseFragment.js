import React, {Fragment, useContext} from "react";
import {calculateTintAndShades,hexToRGB, fontColor} from "../../Functions";
import ColorButton from "../Generator/Generator_Components/Layout/ColorButton";
import Card from "../Generator/Generator_Components/Layout/Card";
import Input from "../Generator/Generator_Components/Layout/Input";
import ThemeContext from '../../contexts/theme/ThemeContext'
import ShowcaseContext from '../../contexts/showcase/ShowcaseContext'

const ColorShowcaseFragment = () => {
    const themeContext = useContext(ThemeContext);
    const { shadowBlur,shadowLength} = themeContext;

    const colorShowcaseContext = useContext(ShowcaseContext)
    const {backgroundColor, inputValue,changeShowcaseColor} = colorShowcaseContext;

    const primaryBackgroundRGB = hexToRGB(backgroundColor)
    const Red = primaryBackgroundRGB.Red || 0;
    const Green = primaryBackgroundRGB.Green || 0;
    const Blue = primaryBackgroundRGB.Blue || 0;

    const font = fontColor(Red, Green, Blue)

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

    const onChangeColor = (event) => changeShowcaseColor(event.target.value)

    return(
        <Fragment>
            <Card
                background={backgroundColor}
                color={font}
                lightShadow={lightShadow}
                darkShadow={darkShadow}
            >
                <h6 style={{fontSize:'1.05rem'}}>
                    Works with every color!
                </h6>
                <h6 style={{fontSize: '0.8rem', marginBottom:'1.2rem'}}>
                    current color: {backgroundColor}
                </h6>
                <span style={{
                    fontSize: '0.9rem',
                    marginBottom:'1.2rem'}}
                >Use preset colors or type your favorite one in the input field below!</span><br/>
                <Input type={'text'}
                       color={font}
                       onChange={onChangeColor}
                       placeholder={'#F0F0F0'}
                       background={backgroundColor}
                       darkShadow={darkShadow}
                       value={inputValue}
                       lightShadow={lightShadow}
                       style={{marginTop:'1.2rem',height:'35px',borderRadius:'6px',maxWidth:'100px'}}
                />
                <Card
                    background={backgroundColor}
                    color={font}
                    lightShadow={lightShadow}
                    darkShadow={darkShadow}>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginBottom:'1rem'}}>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#ED2939'}
                            onClick={() => changeShowcaseColor('#ED2939')}/>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#F46036'}
                            onClick={() => changeShowcaseColor('#F46036')}/>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#F3FFB6'}
                            onClick={() => changeShowcaseColor('#F3FFB6')}/>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#6FD08C'}
                            onClick={() => changeShowcaseColor('#6FD08C')}/>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#5CA173'}
                            onClick={() => changeShowcaseColor('#5CA173')}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#26CBD8'}
                            onClick={() => changeShowcaseColor('#26CBD8')}/>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#07BEB8'}
                            onClick={() => changeShowcaseColor('#07BEB8')}
                        />
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#F5D3C8'}
                            onClick={() => changeShowcaseColor('#F5D3C8')}/>
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#8F3985'}
                            onClick={() => changeShowcaseColor('#8F3985')}
                        />
                        <ColorButton
                            lighterShadow={lightShadow}
                            darkerShadow={darkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={'#DF2687'}
                            onClick={() => changeShowcaseColor('#DF2687')}/>
                    </div>
                </Card>
            </Card>
        </Fragment>
    )
}

export default ColorShowcaseFragment;
