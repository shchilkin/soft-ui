import React, { useContext, useState } from "react";
import SoftUIPreviewDesktop from "./Generator_Components/Desktop/desktop_components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "./Generator_Components/Desktop/desktop_components/SoftUIControlDesktop";
import SoftUIControlMobile from "./Generator_Components/Layout/SoftUIControl/SoftUIControlMobile";
import OptionBar from "./Generator_Components/Desktop/desktop_components/OptionBar/OptionBar";
import Generator_mobile from "./Generator_Components/Mobile/Generator_mobile";
import Generator_desktop from "./Generator_Components/Desktop/Generator_desktop";
import GenerationContext from "../../contexts/generation(Desktop)/GenerationContext";

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

//#DCFE4B yellow
// #8BD173 green
// #33D2D0 blue
// #04A883 green
//#ADC009 green

const Generator = () => {

    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    const viewportWidth = window.innerWidth
    function getContainerHeight(viewportWidth) {
        if(viewportWidth < 500){
            return <Generator_mobile />
        } else {
            return <Generator_desktop/>
        }
    }

    return (
      <div className={"container mb-5"}>
        <h1 style={{fontSize:'1.75rem'}} className={'mb-3 mt-3 text-center text-sm-left'}>Soft UI generator <span>stage {stage}</span></h1>
          <div className={'row'}>
              <div className={'col-12'}>
                  <OptionBar/>
              </div>
          </div>
          {getContainerHeight(viewportWidth)}
      </div>
  );
};

export default Generator;
