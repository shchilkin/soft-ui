import React, {useContext, useEffect} from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import {isHexValid} from "../../Functions";
import OptionBar from "./Generator_Components/Desktop/desktop_components/OptionBar/OptionBar";
import SoftUIPreviewDesktop from "./Generator_Components/Desktop/desktop_components/SoftUIPreviewDesktop";
import SoftUIControlDesktop from "./Generator_Components/Desktop/desktop_components/SoftUIControlDesktop";


//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

//#DCFE4B yellow
// #8BD173 green
// #33D2D0 blue
// #56CAF4 sky blue
// #04A883 green
//#ADC009 green
//#FBA50E light orange
//#E63387 Pink
//#F0E3D6 orange-ish white
//#530522 dark cherry red

const Generator = () => {
    //  Full link | https://www.softui.io/generator
    let href = window.location.href;
    //  Link without pathname | https://www.softui.io
    let origin = window.location.origin;
    //  Pathname | /generator
    let pathname = window.location.pathname;
    //  colorFromURL will contain hexadecimal color code
    let colorFromURL = href.replace(origin,"").replace(pathname,"").replace("#","")

    const {changeColor} = useContext(ThemeContext);

    //  If hex is valid, change color to one is in the URL
    useEffect(() => {
        if (isHexValid(colorFromURL)){
            changeColor("Hex", colorFromURL)
        }
    }, [colorFromURL]);

    return (
      <div style={{
          marginTop:'2rem',
          alignItems:"center",
          justifyContent:"center",}}>
          <div style={{
              paddingBottom:'1rem',
              paddingTop:'1rem'}} className={"container mb-5"}>
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
      </div>
  );
};

export default Generator;
