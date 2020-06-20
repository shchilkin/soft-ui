import React, {useContext, useEffect} from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import {isHexColorValid} from "../../Functions";
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

//#03FA74 Cool green 

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
        if (isHexColorValid(colorFromURL)){
            changeColor("Hex", colorFromURL)
        }
    }, [colorFromURL, viewPortHeight, changeColor]);

    return (
      <div
          id={'Generator Grid'}
          className={'generatorGrid'}>
          <div className={'previewItem'}>
              <SoftUIPreview/>
          </div>
          <div className={'controlItem'}>
              <SoftUIControl/>
          </div>
      </div>
  );
};

export default Generator;
