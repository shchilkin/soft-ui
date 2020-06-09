import React, {Fragment, useContext} from "react";
import Input from "../../Layout/Input";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";


const RGBinput = () => {

    const themeContext = useContext(ThemeContext);
    const {font, colorRGB, shadows, shadowBlur, shadowLength, changeColor} = themeContext;

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;


    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return(
        <Fragment>
                   <Input
                       type={"number"}
                       style={{width:"33%", maxHeight:'32px', border: "0px", borderRadius:'6px',
                           borderTopRightRadius:'0', borderBottomRightRadius:'0',textAlign:'center',marginBottom:'0'}}
                       onChange={(event) => onChangeColor(event, "Red")}
                       value={colorRGB.Red}
                       props={componentProps}
                   />
                   <Input
                       type={"number"}
                       style={{width:"33%", maxHeight:'32px',border: "0px",borderRadius:'0',
                           marginBottom:'0',textAlign:'center'}}
                       onChange={(event) => onChangeColor(event, "Green")}
                       value={colorRGB.Green}
                       props={componentProps}
                   />
                   <Input
                       type={"number"}
                       style={{width:"33%", maxHeight:'32px', border: "0px",marginBottom:'0',textAlign:'center',
                           borderRadius:'6px',borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}}
                       onChange={(event) => onChangeColor(event, "Blue")}
                       value={colorRGB.Blue}
                       props={componentProps}
                   />
        </Fragment>
   )
};

export default RGBinput