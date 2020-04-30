import React from "react";
import HEXinput from "./HEXinput";
import RGBinput from "./RGBinput";

//inputMode true for Hexadecimal and false for RGB
const ColorInput = ({inputMode}) => {
    console.log('inputMode',inputMode)
    return (inputMode ? <HEXinput/> : <RGBinput/>)
}

export default ColorInput;