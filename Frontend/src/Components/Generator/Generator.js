import React, {useContext, useEffect} from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import {isHexValid} from "../../Functions";
import SoftUIPreview from "./Generator_Components/SoftUIPreview";
import SoftUIControl from "./Generator_Components/SoftUIControl";


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
    const href = window.location.href;
    //  Link without pathname | https://www.softui.io
    const origin = window.location.origin;
    //  Pathname | /generator
    const pathname = window.location.pathname;
    //  colorFromURL will contain hexadecimal color code without #
    const colorFromURL = href.replace(origin,"").replace(pathname,"").replace("#","")

    const viewPortHeight =  window.innerHeight;
    const {changeColor} = useContext(ThemeContext);

    //  If hex color code is valid, change color to one is in the URL | only on mount
    useEffect(() => {
        if (isHexValid(colorFromURL)){
            changeColor("Hex", colorFromURL)
        }
    }, [colorFromURL]);

    return (
      <div
          id={'Generator Grid'}
          style={{
              height:`${viewPortHeight-60}px`,
              gridTemplateColumns:'1fr 1fr',
              display: "grid"
          }}>
          <div style={{
              height:'100%',
              gridColumn:'1/2'}}>
              <SoftUIPreview/>
          </div>
          <div style={{
              height:'100%',
              gridColumn:'2/2'}}>
              <SoftUIControl/>
          </div>
      </div>
  );
};

export default Generator;
