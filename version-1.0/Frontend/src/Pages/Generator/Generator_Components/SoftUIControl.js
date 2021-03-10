import React from "react";
import Card from "../../../Components/Updated/Card";
import ControlStageChooseColor from "./ControlStageChooseColor";


const SoftUIControl = () => {

    const controlCardBG = "#F0F0F0";

    return (
        <div id={'Control Panel'}
            style={{
            height:"100%",
            display:'grid',
            gridGap:'1rem',
            gridTemplateRows:'minmax(0px, 50px) 1fr minmax(0px, 50px)',
            gridTemplateColumns:'4rem minmax(284px, 498px) 4rem',
            backgroundColor: '#F0F0F0'}}>
            <div
                style={{
                    gridRow:'2/3',
                    gridColumn:'2/3',
                }}
            >
                <Card
                    lightShadowFactor={95}
                    backgroundColor={controlCardBG}
                    sameColorShadow = {true}
                    style={{width:'minmax(0px, 498px'}}
                >
                    <ControlStageChooseColor />
                </Card>
            </div>
        </div>
    )
}

export default SoftUIControl;