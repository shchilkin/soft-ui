import React, { useContext, useState } from "react";
import SoftUIPreviewDesktop from "../Generator/Generator_Components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "../Generator/Generator_Components/SoftUIControlDesktop";
import SoftUIControlMobile from "../Generator/Generator_Components/Layout/SoftUIControl/SoftUIControlMobile";
import OptionBar from "../Generator/Generator_Components/OptionBar/OptionBar";

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

//#DCFE4B yellow
// #8BD173 green
// #33D2D0 blue
// #04A883 green
//#ADC009 green

const Generator = () => {

    const viewportWidth = window.innerWidth
    function getContainerHeight(viewportWidth) {
        if(viewportWidth < 500){
            return <SoftUIControlMobile/>
        } else {
            return <SoftUIControlDesktop/>
        }
    }

    return (
      <div className={"container mb-5"}>
        <h3 className={'mb-3 mt-3 text-center text-sm-left'}>Soft-UI generator</h3>
          <div className={'row'}>
              <div className={'col-12'}>
                  <OptionBar/>
              </div>
          </div>
          <div className='row'
             style={{ marginRight: "0px", marginLeft: "0px" }}
          >
              <div className={"col-md-6"}>
                  <SoftUIPreviewDesktop/>
              </div>
              <div className={"col-md-6"}>
                  {getContainerHeight(viewportWidth)}
              </div>
          </div>
      </div>
  );
};

export default Generator;
