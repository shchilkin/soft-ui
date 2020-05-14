import React from "react";
import SoftUIControlMobile from "../Layout/SoftUIControl/SoftUIControlMobile";
import SoftUIPreviewMobile from "../Layout/SoftUIPreview/SoftUIPreviewMobile";


const Generator_mobile = () => {

    return(
        <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
            <div className={"col-md-6"}>
                <SoftUIPreviewMobile/>
            </div>
            <div className={"col-md-6"}>
                <SoftUIControlMobile/>
            </div>
    </div>
    )
}

export default Generator_mobile;