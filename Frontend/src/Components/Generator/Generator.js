import React, {useContext, useEffect} from "react";
import Generator_desktop from "./Generator_Components/Desktop/Generator_desktop";
import ThemeContext from "../../contexts/theme/ThemeContext";
import {isHexValid} from "../../Functions";


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
    let href = window.location.href;
    let origin = window.location.origin;
    let pathname = window.location.pathname;

    // colorFromURL will contain hexadecimal color code
    let colorFromURL = href.replace(origin,"").replace(pathname,"").replace("#","")

    const {colorHEX, changeColor} = useContext(ThemeContext);

    useEffect(() => {
        if (isHexValid(colorFromURL)){
            changeColor("Hex",colorFromURL)
        }
    }, [colorFromURL]);

    return (
      <div style={{
          // minHeight:'70vh',
          // display:"flex",
          marginTop:'2rem',
          alignItems:"center",
          justifyContent:"center",}}>
          <div style={{
              paddingBottom:'1rem',
              paddingTop:'1rem'}} className={"container mb-5"}>
              <Generator_desktop/>
          </div>
      </div>
  );
};

export default Generator;
