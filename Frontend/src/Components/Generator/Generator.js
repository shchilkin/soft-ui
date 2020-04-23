import React, { useContext, useState } from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import SoftUIPreview from "./Generator.components/Layout/SoftUIPreview";
import SoftUIControl from "./Generator.components/Layout/SoftUIControl";

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

const Generator = () => {
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
            <SoftUIControl/>
          </div>
        </div>
      </div>
  );
};

export default Generator;
