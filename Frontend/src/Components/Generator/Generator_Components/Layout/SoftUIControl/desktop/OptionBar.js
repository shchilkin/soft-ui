import React, {useContext} from "react";
import styled from 'styled-components'
import {calculateColor,toHex} from "../../../../Functions.SoftUIGenerator";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";

function calculateTintAndShades(red, green, blue, factor = 85,outputMode = 'hex') {
    let _factor = factor / 100;

    console.log('factor',_factor)
    switch (outputMode) {
        case "rgb":
            break
        case "hex":
            let hexRed = toHex(calculateColor(red, _factor));
            let hexGreen = toHex(calculateColor(green, _factor));
            let hexBlue = toHex(calculateColor(blue, _factor))
            return `#${hexRed}${hexGreen}${hexBlue}`
        default:
            break
    }
}

console.log()

const OptionBar = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const Bar = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    background-color: ${calculateTintAndShades(Red, Green, Blue, 75,"hex")};
    border: 1px solid transparent;
    border-radius: ${borderRadius}px;`;

    const Badge_chosen = styled.span`
     padding: 5px 4px;
     background-color: ${calculateTintAndShades(Red, Green, Blue, 115,"hex")};
     border-radius:${Math.round(borderRadius/2)}px;
    `;
    const Badge = styled.span`
     padding: 5px 4px;
     background-color: ${calculateTintAndShades(Red, Green, Blue, 95,"hex")};
     border-radius:${Math.round(borderRadius/2)}px;
    `;


    return(
        <Bar className={'d-none d-sm-block'}>
            <Badge_chosen>Start</Badge_chosen>{" "}
            =><Badge>choose Color</Badge>{" "}
            => <Badge>customize Card</Badge>{" "}
            => <Badge>customize Button</Badge>{" "}
            => <Badge>customize Input</Badge>{" "}
            => <Badge>customize Badge</Badge>{" "}
            => <Badge>Generate CSS</Badge>
        </Bar>
    )
}
export default OptionBar

