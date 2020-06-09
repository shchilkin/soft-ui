import React, {useContext} from "react";
import HEXinput from "./HEXinput";
import RGBinput from "./RGBinput";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";

//inputMode true for Hexadecimal and false for RGB
const ColorInput = ({inputMode}) => {


    const themeContext = useContext(ThemeContext);
    const {shadows} = themeContext;


    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    return (
        <div style={{borderRadius:'12px',
            boxShadow:`5px 5px 30px 0 ${darkerShadow}, -5px -5px 30px 0 ${lighterShadow}`,}}>
            <div style={{padding:'9px',borderRadius:'12px',
                borderTopLeftRadius:'0',borderBottomLeftRadius:'0'
            }}>
                {inputMode ? <HEXinput/> : <RGBinput/>}
            </div>
</div>
    )
}

export default ColorInput;