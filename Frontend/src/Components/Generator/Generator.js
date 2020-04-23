import React, { useContext, useState } from "react";
import SoftUIPreview from "./Generator_Components/Layout/SoftUIPreview/SoftUIPreview";
import SoftUIControlDesktop from "./Generator_Components/Layout/SoftUIControl/SoftUIControlDesktop";
import SoftUIControlMobile from "./Generator_Components/Layout/SoftUIControl/SoftUIControlMobile";

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

// #8BD173 green
// #33D2D0 blue

const Generator = () => {

    const viewportWidth = window.innerWidth
    function getContainerHeight(viewportWidth) {
        if(viewportWidth < 500){
            return <SoftUIControlMobile/>
        } else return <SoftUIControlDesktop/>
    }

    return (
      <div className={"container mb-5"}>
        <h3 className={'mb-3 mt-3'}>Soft-UI generator</h3>
        <div className='row'
             style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          <div className={"col-md-6"}>
            <SoftUIPreview/>
          </div>
          <div className={"col-md-6"}>
              {getContainerHeight(viewportWidth)}
          </div>
        </div>
      </div>
  );
};

export default Generator;
