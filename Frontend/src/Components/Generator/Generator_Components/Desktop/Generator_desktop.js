import React, {useContext} from "react";
import SoftUIPreviewDesktop from "./desktop_components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "./desktop_components/SoftUIControlDesktop";
import OptionBar from "./desktop_components/OptionBar/OptionBar";
import ThemeContext from "../../../../contexts/theme/ThemeContext";

const Generator_desktop = () => {

    const {colorRGB, font} = useContext(ThemeContext);

    const {Red, Green, Blue} = colorRGB;

    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`

    return(
        <div style={{
            color: font,
            backgroundColor: mainColor}}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <OptionBar/>
                </div>
            </div>
            <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
                <div className={"col-md-6"}>
                    <SoftUIPreviewDesktop/>
                </div>
                <div className={"col-md-6"}>
                    <SoftUIControlDesktop/>
                </div>
            </div>
        </div>
    )
}

export default Generator_desktop;