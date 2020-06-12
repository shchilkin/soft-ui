 import React from "react";
import ControlStagesWrapper from "./ControlStages/ControlStagesWrapper";
 import OptionBar from "./OptionBar/OptionBar";


const SoftUIControl = () => {

    return (
        <div style={{
            height:"100%",
            paddingRight:'1rem',
            paddingTop:'1rem',
            paddingLeft:'1rem',
            backgroundColor: '#F0F0F0'}}>
            <ControlStagesWrapper/>
            <OptionBar/>
        </div>
    )
}

export default SoftUIControl;