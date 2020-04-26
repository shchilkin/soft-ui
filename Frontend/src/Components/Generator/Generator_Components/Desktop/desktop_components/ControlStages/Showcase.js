import React, {Fragment, useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Button from "../../../Layout/Button";
import Card from "../../../Layout/Card";
import Badge from "../../../../../Badge/Badge.component";
import {calculateTintAndShades, hexToRGB, fontColor} from "../../../../../../Functions";

const Showcase = () => {
    const generationContext = useContext(GenerationContext);
    const { changeStage } = generationContext;

    const themeContext = useContext(ThemeContext);

    const {colorRGB, darkShadowFactor ,lightShadowFactor} = themeContext;
    const {Red, Green, Blue} = colorRGB

    const darkModeFactor = 75;

    console.log('font',fontColor(
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Red,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Green,
        hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Blue
    ))

    return (
        <Fragment>
            <Card type={"top"}>
                <Badge>Showcase</Badge>
                <Card
                    background={calculateTintAndShades(Red, Green, Blue, darkModeFactor)}
                    style={{height:'300px'}}>
                    <Card
                        background={calculateTintAndShades(Red, Green, Blue, darkModeFactor)}
                        darkShadow={calculateTintAndShades(
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Red,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Green,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Blue,
                            Math.round(darkShadowFactor * 100)
                        )}
                        lightShadow={calculateTintAndShades(
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Red,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Green,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Blue,
                            Math.round(lightShadowFactor * 100)
                        )}
                        color={fontColor(
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Red,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Green,
                            hexToRGB(calculateTintAndShades(Red, Green, Blue, darkModeFactor)).Blue
                        )}
                    >Dark mode {calculateTintAndShades(Red, Green, Blue, darkModeFactor)}</Card>
                </Card>
            </Card>
            <Card
                type={'bottom'}
                style={{display:'flex',justifyContent:'center', alignItems:'center',}}
            >
                <Button
                    style={{width:'90%'}}
                    onClick={() => changeStage("+")}
                    children={'Generate!'}
                />
            </Card>
        </Fragment>
    )
}

export default Showcase;