import React, {useContext, useState} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import {getRandomInt, toHex} from "../../../../../../Functions";
import Badge from "../../../../../Badge/Badge.component";
import Button from "../../../Layout/Button";
import Input from "../../../Layout/Input";
import ColorPickerSketch from "../../../colorPickerSketch";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";

const ControlStageZero = () => {
    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
        changeColor,
    } = themeContext;

    const generationContext = useContext(GenerationContext);
    const { changeStage } = generationContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;


    const generateRandom = () => {
        let rgbObject = {
            Red:getRandomInt(255),
            Green:getRandomInt(255),
            Blue:getRandomInt(255)
        }
        changeColor('RGB', rgbObject);
    }

    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return (
        <div
            style={{
                minHeight: "100px",
                backgroundColor: mainColor,
                color: font,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                mixBlendMode: "normal",
                boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                                 -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
                border: `1px solid ${mainColor}`,
                borderRadius: `${borderRadius}px`,
            }}
        >
            <Button
                style={{width:'90%'}}
                props={componentProps}
                onClick={() => changeStage("+")}
                children={'Generate!'}
            />
        </div>
    )
}

export default ControlStageZero;