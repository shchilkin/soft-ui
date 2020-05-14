import Badge from "../../../../../Badge/Badge.component";
import Input from "../../Input";
import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";


const HexInput = (onChange) => {

    const themeContext = useContext(ThemeContext);

    const {
        font,
        colorRGB,
        colorHEX,
        shadows,
        shadowBlur,
        shadowLength,
        onChangeColor
    } = themeContext;


    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    const componentProps = {
        font:           font,
        Blur:           shadowBlur,
        shadowLength:   shadowLength,
        mainColor:      `rgb(${colorRGB.Red},${colorRGB.Green},${colorRGB.Blue})`,
        darkerShadow:   `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`,
        lighterShadow:  `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`,
    };

    return (
        <div>
            <h6>
                <Badge style={{ backgroundColor: componentProps.darkerShadow, color: font }}>
                    #<span style={{ color: "#F00", fontWeight: "bold" }}>FF</span>
                    <span style={{ color: "#0F0", fontWeight: "bold" }}>FF</span>
                    <span style={{ color: "#00F", fontWeight: "bold" }}>FF</span>
                </Badge>
            </h6>
            <Input
                onChange={() => onChange}
                value={colorHEX}
                placeholder={"#000000"}
                props={componentProps}
            />
        </div>
    );
}

export default HexInput