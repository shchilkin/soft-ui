import React, {Fragment} from "react";
import ControlStagesWrapper from "./ControlStages/ControlStagesWrapper";
import OptionBar from "./OptionBar/OptionBar";
import Card from "./Layout/Card";
import {calculateTintAndShades, fontColorHex} from "../../../Functions";


const SoftUIControl = () => {

    const controlCardBG = "#F0F0F0";
    const darkShadow = calculateTintAndShades(240,240,240,85)
    const lightShadow = calculateTintAndShades(240,240,240,105)

    return (
        <div id={'Control Panel'}
            style={{
            height:"100%",
            display:'grid',
            gridGap:'1rem',
            gridTemplateRows:'1fr 2fr 1fr',
            gridTemplateColumns:'4rem 1fr 4rem',
            backgroundColor: '#F0F0F0'}}>
            <div
                style={{
                    gridRow:'2/3',
                    gridColumn:'2/3',
                }}
            >
                <Card
                    background={controlCardBG}
                    darkShadow={darkShadow}
                    lightShadow={lightShadow}
                >
                    <ControlStagesWrapper/>
                    <div style={{marginTop:'1rem'}}>
                        <OptionBar/>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SoftUIControl;