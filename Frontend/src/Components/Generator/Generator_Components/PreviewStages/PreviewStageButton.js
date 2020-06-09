import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import Button from "../Layout/Button";
import PreviewButtonRegular from "../PreviewButtons/PreviewButtonRegular";
import PreviewButtonFlat from "../PreviewButtons/PreviewButtonFlat";
import {calculateTintAndShades} from "../../../../Functions";

const PreviewStageButton = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        secondaryColor} = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const componentPropsFontColor = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };


    function calculateColors(color, mode='complimentary') {
        return {red: (255 - color.Red), green: (255 - color.Green), blue: (255 - color.Blue)}
    }

    const {red, green, blue} = calculateColors(colorRGB)

    const secondaryColorSwitch = (colorCode) => {
        switch (colorCode) {
            case 'complementary-60':
                return calculateTintAndShades(red,green,blue,60)
            case 'complementary-70':
                return calculateTintAndShades(red,green,blue,70)
            case 'complementary-80':
                return calculateTintAndShades(red,green,blue,80)
            case 'complementary-90':
                return calculateTintAndShades(red,green,blue,90)
            case 'complementary-100':
                return calculateTintAndShades(red,green,blue,100)
            case 'complementary-110':
                return calculateTintAndShades(red,green,blue,110)
            case 'complementary-120':
                return calculateTintAndShades(red,green,blue,120)
            case 'complementary-130':
                return calculateTintAndShades(red,green,blue,130)
            case 'complementary-140':
                return calculateTintAndShades(red,green,blue,140)
            case 'main-10':
                return calculateTintAndShades(Red,Green,Blue,10)
            case 'main-20':
                return calculateTintAndShades(Red,Green,Blue,20)
            case 'main-30':
                return calculateTintAndShades(Red,Green,Blue,30)
            case 'main-40':
                return calculateTintAndShades(Red,Green,Blue,40)
            case 'main-50':
                return calculateTintAndShades(Red,Green,Blue,50)
            case 'main-60':
                return calculateTintAndShades(Red,Green,Blue,60)
            case 'main-70':
                return calculateTintAndShades(Red,Green,Blue,70)
            case 'main-80':
                return calculateTintAndShades(Red,Green,Blue,80)
            case 'main-90':
                return calculateTintAndShades(Red,Green,Blue,90)
            case 'main-110':
                return calculateTintAndShades(Red,Green,Blue,110)
            case 'main-120':
                return calculateTintAndShades(Red,Green,Blue,120)
            case 'main-130':
                return calculateTintAndShades(Red,Green,Blue,130)
            case 'main-140':
                return calculateTintAndShades(Red,Green,Blue,140)
            case 'main-150':
                return calculateTintAndShades(Red,Green,Blue,150)
            case 'main-160':
                return calculateTintAndShades(Red,Green,Blue,160)
            case 'main-170':
                return calculateTintAndShades(Red,Green,Blue,170)
            case 'main-180':
                return calculateTintAndShades(Red,Green,Blue,180)
            case 'main-190':
                return calculateTintAndShades(Red,Green,Blue,190)
        }
    }

    const componentPropsSecondary = {
        mainColor: mainColor,
        font: secondaryColorSwitch(secondaryColor),
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return (
        <div>
            <div className={"row d-none d-sm-block"}>
                <div className={"col-12"}>
                    <h6 style={{ fontWeight: "bold" }}>Regular button states</h6>
                    <div className={"row mt-3 mb-1"}>
                        <div className={"col-md-4 mb-3"}>
                            <Button
                                props={componentPropsFontColor}
                                state={"initial"}
                                children={"Button"}
                            />
                        </div>
                        <div className={"col-md-4 mb-3"}>
                            <PreviewButtonRegular
                                lightShadow={"#FFF"}
                                darkShadow={"#D9D9D9"}
                                state="hover"
                                props={componentPropsFontColor}
                                children={"hover"}
                            />
                        </div>
                        <div className={"col-md-4 mb-3"}>
                            <PreviewButtonRegular
                                state={"active"}
                                props={componentPropsFontColor}
                                children={"Active"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageButton;
