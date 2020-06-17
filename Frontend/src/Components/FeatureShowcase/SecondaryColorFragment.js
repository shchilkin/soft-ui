import React, {useContext} from "react";
import ColorButton from "../../Pages/Generator/Generator_Components/Layout/ColorButton";
import Card from "../Updated/Card";
import {getFontColorHex, hexToRGB, getTintsAndShades} from 'color-processing-library';
import ThemeContext from '../../contexts/theme/ThemeContext'
import ShowcaseContext from '../../contexts/showcase/ShowcaseContext'

const SecondaryColorFragment = () => {
    const themeContext = useContext(ThemeContext);
    const {shadowBlur, shadowLength} = themeContext;

    const colorShowcaseContext = useContext(ShowcaseContext)
    const {backgroundColor, secondaryColor,
        changeSecondaryColor} = colorShowcaseContext;

    const font = getFontColorHex(secondaryColor);

    const {Red, Green, Blue} = hexToRGB(secondaryColor);
    const {Red: mainRed, Green: mainGreen, Blue: mainBlue} = hexToRGB(backgroundColor);

    const complementaryDarkShadow = getTintsAndShades(Red,Green,Blue, 85);
    const complementaryLightShadow = getTintsAndShades(Red,Green,Blue, 105);

    const mainDarkShadow = getTintsAndShades(mainRed, mainGreen, mainBlue, 85);
    const mainLightShadow = getTintsAndShades(mainRed, mainGreen, mainBlue, 105);

    const complementaryColors = {
        60: getTintsAndShades(Red,Green,Blue, 60),
        80: getTintsAndShades(Red,Green,Blue, 80),
        120: getTintsAndShades(Red,Green,Blue, 120),
        140: getTintsAndShades(Red,Green,Blue, 140),
    };

    const mainColorShades = {
        50: getTintsAndShades(mainRed, mainGreen, mainBlue,50),
        60: getTintsAndShades(mainRed, mainGreen, mainBlue,60),
        70: getTintsAndShades(mainRed, mainGreen, mainBlue,70),
        80: getTintsAndShades(mainRed, mainGreen, mainBlue, 80),
        90: getTintsAndShades(mainRed, mainGreen, mainBlue,90),
    };

    const mainColorTints = {
        110: getTintsAndShades(mainRed, mainGreen, mainBlue,110),
        120: getTintsAndShades(mainRed, mainGreen, mainBlue,120),
        130: getTintsAndShades(mainRed, mainGreen, mainBlue,130),
        140: getTintsAndShades(mainRed, mainGreen, mainBlue, 140),
        150: getTintsAndShades(mainRed, mainGreen, mainBlue,150),
    };

    return(
        <div style={{height:'100%', display:'flex'}}>
            <Card
                backgroundColor={secondaryColor}
                fontColor={font}
                shadowColorBase={backgroundColor}
            >
                <h6 style={{fontSize:'1.05rem'}}>
                    Generate a secondary color!
                </h6>
                <h6 style={{fontSize: '0.8rem', marginBottom:'1.2rem'}}>
                    current color: {secondaryColor}
                </h6>
                <span style={{
                    fontSize: '0.9rem',
                    marginBottom:'1.2rem'}}
                >Generate complementary color, or shades and tints of the main color</span><br/>
                <Card
                    backgroundColor={secondaryColor}
                    isSameColorShadow={true}
                    fontColor={font}
                    isInsetShadow={true}
                >
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginBottom:'1rem'}}>
                        <ColorButton
                            lightShadow={complementaryLightShadow}
                            darkShadow={complementaryDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={complementaryColors['60']}
                            onClick={() => changeSecondaryColor(
                                complementaryColors['60'],
                                complementaryLightShadow,
                                complementaryDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={complementaryLightShadow}
                            darkShadow={complementaryDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={complementaryColors['80']}
                            onClick={() => changeSecondaryColor(
                                complementaryColors['80'],
                                complementaryLightShadow,
                                complementaryDarkShadow)}

                        />
                        <ColorButton
                            lightShadow={complementaryLightShadow}
                            darkShadow={complementaryDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={secondaryColor}
                            onClick={() => changeSecondaryColor(
                                secondaryColor,
                                complementaryLightShadow,
                                complementaryDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={complementaryLightShadow}
                            darkShadow={complementaryDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={complementaryColors['120']}
                            onClick={() => changeSecondaryColor(
                                complementaryColors['120'],
                                complementaryLightShadow,
                                complementaryDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={complementaryLightShadow}
                            darkShadow={complementaryDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={complementaryColors['140']}
                            onClick={() => changeSecondaryColor(
                                complementaryColors['140'],
                                complementaryLightShadow,
                                complementaryDarkShadow)}
                        />
                    </div>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginBottom:'1rem'}}>
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorShades['50']}
                            onClick={() => changeSecondaryColor(
                                mainColorShades['50'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorShades['60']}
                            onClick={() => changeSecondaryColor(
                                mainColorShades['60'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorShades['70']}
                            onClick={() => changeSecondaryColor(
                                mainColorShades['70'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorShades['80']}
                            onClick={() => changeSecondaryColor(
                                mainColorShades['80'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorShades['90']}
                            onClick={() => changeSecondaryColor(
                                mainColorShades['90'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                    </div>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorTints['110']}
                            onClick={() => changeSecondaryColor(
                                mainColorTints['110'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorTints['120']}
                            onClick={() => changeSecondaryColor(
                                mainColorTints['120'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorTints['130']}
                            onClick={() => changeSecondaryColor(
                                mainColorTints['130'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorTints['140']}
                            onClick={() => changeSecondaryColor(
                                mainColorTints['140'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                        <ColorButton
                            lightShadow={mainLightShadow}
                            darkShadow={mainDarkShadow}
                            shadowLength={shadowLength}
                            blur={shadowBlur}
                            background={"#FFF"}
                            mainColor={mainColorTints['150']}
                            onClick={() => changeSecondaryColor(
                                mainColorTints['150'],
                                mainLightShadow,
                                mainDarkShadow)}
                        />
                    </div>
                </Card>
            </Card>
        </div>
    )
}

export default SecondaryColorFragment;
