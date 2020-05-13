import React, {useContext} from "react";
import Generator_desktop from "./Generator_Components/Desktop/Generator_desktop";
import ThemeContext from "../../contexts/theme/ThemeContext";


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
    const {colorRGB, font} = useContext(ThemeContext);
    const {Red, Green, Blue} = colorRGB;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;

    return (
      <div style={{
          // minHeight:'70vh',
          // display:"flex",
          marginTop:'2rem',
          alignItems:"center",
          justifyContent:"center",}}>
          <div style={{borderRadius:24,
              paddingBottom:'1rem',
              paddingTop:'1rem',
              color: font, backgroundColor: mainColor}} className={"container mb-5"}>
              <Generator_desktop/>
          </div>
      </div>
  );
};

export default Generator;
