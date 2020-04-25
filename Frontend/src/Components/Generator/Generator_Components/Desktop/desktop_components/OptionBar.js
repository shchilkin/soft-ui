import React, {useContext} from "react";
import styled from 'styled-components'
import {calculateTintAndShades} from "../../../../Functions.SoftUIGenerator";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";

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
            <Badge>Start</Badge>{" "}
            =><Badge_chosen>choose Color</Badge_chosen>{" "}
            => <Badge>customize components</Badge>{" "}
            => <Badge>Generate CSS</Badge>
        </Bar>
    )
}
export default OptionBar

