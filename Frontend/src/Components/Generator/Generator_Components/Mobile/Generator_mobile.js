import React from "react";
import SoftUIPreviewDesktop from "../Desktop/desktop_components/SoftUIPreviewDesktop";
import SoftUIControlMobile from "../Layout/SoftUIControl/SoftUIControlMobile";


const Generator_mobile = () => {

    return(
        <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
            <div className={"col-md-6"}>
                <SoftUIPreviewDesktop/>
            </div>
            <div className={"col-md-6"}>
                <SoftUIControlMobile/>
            </div>
    </div>
    )
}

export default Generator_mobile;