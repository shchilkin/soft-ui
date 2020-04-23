import React, { useContext, useState } from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import SoftUIPreview from "./Generator.components/Layout/SoftUIPreview";
import SoftUIControl from "./Generator.components/Layout/SoftUIControl";

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

const Generator = () => {
  const themeContext = useContext(ThemeContext);
  const {
    font,
    colorRGB,
  } = themeContext;

  const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;

  return (
    <div style={{backgroundColor: mainColor, color: font }}>
      <div className={"container"}>
        <h3>Soft-UI generator</h3>
        <div
          className='row' style={{ marginRight: "0px", marginLeft: "0px" }}>
          <div className={"col-md-6"}>
            <SoftUIPreview/>
          </div>
          <div className={"col-md-6"}>
            <SoftUIControl/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
