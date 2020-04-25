import React from "react";
import SoftUIPreview from "../Layout/SoftUIPreview/SoftUIPreview";
import SoftUIControlDesktop from "../Layout/SoftUIControl/desktop/SoftUIControlDesktop";



const Generator_desktop = () => {

    return(
        <div className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
            <div className={"col-md-6"}>
                <SoftUIPreview/>
            </div>
            <div className={"col-md-6"}>
                <SoftUIControlDesktop/>
            </div>
        </div>
    )
}

export default Generator_desktop;