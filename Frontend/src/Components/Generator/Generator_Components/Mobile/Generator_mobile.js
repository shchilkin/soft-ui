import React from "react";
import SoftUIPreview from "../Layout/SoftUIPreview/SoftUIPreview";
import SoftUIControlMobile from "../Layout/SoftUIControl/SoftUIControlMobile";


const Generator_mobile = () => {

    return(
        <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
            <div className={"col-md-6"}>
                <SoftUIPreview/>
            </div>
            <div className={"col-md-6"}>
                <SoftUIControlMobile/>
            </div>
    </div>
    )
}

export default Generator_mobile;