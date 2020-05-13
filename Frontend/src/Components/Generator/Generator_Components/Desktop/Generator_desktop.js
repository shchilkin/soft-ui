import React from "react";
import SoftUIPreviewDesktop from "./desktop_components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "./desktop_components/SoftUIControlDesktop";
import OptionBar from "./desktop_components/OptionBar/OptionBar";

const Generator_desktop = () => {

    return(
        <div>
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