import React, {useContext} from "react";
import styled from 'styled-components'
import {calculateTintAndShades} from "../../../Functions.SoftUIGenerator";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";

const OptionBar = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorRGB,
        borderRadius,
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    return(
        <Bar
            className={'d-none d-sm-block'}
            background={calculateTintAndShades(Red, Green, Blue, 75,"hex")}
            border={borderRadius}
        >
            <Badge>Start</Badge>{" "}
            =><Badge_chosen
                background={calculateTintAndShades(Red, Green, Blue, 115,"hex")}
                border={Math.round(borderRadius/2)}
            >
                choose Color
            </Badge_chosen>{" "}
            => <Badge
            background={calculateTintAndShades(Red, Green, Blue, 95,"hex")}
            border={Math.round(borderRadius/2)}
        >customize components</Badge>{" "}
            => <Badge
            background={calculateTintAndShades(Red, Green, Blue, 95,"hex")}
            border={Math.round(borderRadius/2)}
        >Generate CSS</Badge>
        </Bar>
    )
}
export default OptionBar


const Bar = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    background-color: ${props => props.background};
    border: 1px solid transparent;
    border-radius: ${props => props.border}px;`;

const Badge_chosen = styled.span`
     padding: 5px 4px;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;
const Badge = styled.span`
     padding: 5px 4px;
     background-color: ${props => props.background};
     border-radius:${props => props.border}px;
    `;
