import React, { useContext, useState } from "react";
import SoftUIGenButton from "./Generator.components/SoftUIGenButton";
import SoftUIGenInput from "./Generator.components/SoftUIGenInput";
import Badge from "../Badge/Badge.component";
import ColorPickerSketch from "./Generator.components/colorPickerSketch";
import ThemeContext from "../../contexts/theme/ThemeContext";
import {toHex, getRandomInt, fontColor} from "./Functions.SoftUIGenerator";
import BuyMeACoffee from "../Links/BuyMeACoffee";

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

const Generator = () => {
  const themeContext = useContext(ThemeContext);
  const {
    font,
    colorRGB,
    colorHEX,
    shadows,
    shadowBlur,
    badgeColors,
    shadowLength,
    borderRadius,
    darkShadowFactor,
    lightShadowFactor,
    changeColor,
    resetTheme,
    inverseFont,
    codeFontColor,
    changeShadowBlur,
    changeBadgeColors,
    changeBorderRadius,
    changeShadowLength,
    codeBackgroundColor,
    changeDarkShadowFactor,
    changeLightShadowFactor,
  } = themeContext;

  const viewPortHeight = window.innerHeight

  const lighterShadows = shadows.ligherShadowArray;
  const darkerShadows = shadows.darkerShadowArray;
  const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
  const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
  const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

  // True for Hex and False for RGB
  const [colorInputMode, setColorInputMode] = useState(true);
  const onChangeBlur = (event) => changeShadowBlur(event.target.value);
  const onChangeRadius = (event) => changeBorderRadius(event.target.value);
  const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);
  const onChangeShadowLength = (event) => changeShadowLength(event.target.value);
  const onChangeLightShadowFactor = (event) => changeLightShadowFactor(event.target.value);
  const onChangeDarkShadowFactor = (event) => changeDarkShadowFactor(event.target.value);
  const generateRandom = () => {
    let rgbObject = {
      Red:getRandomInt(255),
      Green:getRandomInt(255),
      Blue:getRandomInt(255)
    }
    changeColor('RGB', rgbObject);
  }

  const componentProps = {
    mainColor: mainColor,
    font: font,
    Blur: shadowBlur,
    shadowLength: shadowLength,
    darkerShadow: darkerShadow,
    lighterShadow: lighterShadow,
  };

  const containerStyle = {
    width: "100%",
    height: "300px",
    minHeight: "100px",
    backgroundColor: mainColor,
    color: font,
    mixBlendMode: "normal",
    boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
    border: `1px solid ${mainColor}`,
    borderRadius: `${borderRadius}px`,
  };

  async function getColorsFromColorMind(){
    //TODO TEST
    const url = "/api/colors";
    const data = {
      model: "default",
      input: [[colorRGB.Red, colorRGB.Green, colorRGB.Blue], "N", "N", "N", "N"]
    };

    try {
      const response =  await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      console.log('response', response)
      return response;
    }
    catch (error) {
      console.warn('error', error);
    }
  }

  const hexInput = (
    <div className={"row pt-1"}>
      <div className={"col-12"}>
        <h6>
          <Badge style={{ backgroundColor: darkerShadow, color: font }}>
            #<span style={{ color: "#ed2939", fontWeight: "bold" }}>FF</span>
            <span style={{ color: "#0B6623", fontWeight: "bold" }}>FF</span>
            <span style={{ color: "#0f52Ba", fontWeight: "bold" }}>FF</span>
          </Badge>
        </h6>
        <SoftUIGenInput
          onChange={(event) => onChangeColor(event, "Hex")}
          value={colorHEX}
          placeholder={"#000000"}
          props={componentProps}
        />
      </div>
    </div>
  );

  const rgbInput = (
    <div className={"row pt-1"}>
      <div className={"col-4"}>
        <h6>
          <Badge style={{ backgroundColor: darkerShadow }}>
            <span style={{ color: "#ed2939" }}>R</span>
          </Badge>
        </h6>
        <SoftUIGenInput
          type={"number"}
          onChange={(event) => onChangeColor(event, "Red")}
          value={colorRGB.Red}
          placeholder={255}
          props={componentProps}
        />
      </div>
      <div className={"col-4"}>
        <h6>
          <Badge style={{ backgroundColor: darkerShadow }}>
            <span style={{ color: "#0B6623" }}>G</span>
          </Badge>
        </h6>
        <SoftUIGenInput
          type={"number"}
          onChange={(event) => onChangeColor(event, "Green")}
          value={colorRGB.Green}
          placeholder={255}
          props={componentProps}
        />
      </div>
      <div className={"col-4"}>
        <h6>
          <Badge style={{ backgroundColor: darkerShadow }}>
            <span style={{ color: "#0f52Ba" }}>B</span>
          </Badge>
        </h6>
        <SoftUIGenInput
          type={"number"}
          onChange={(event) => onChangeColor(event, "Blue")}
          value={colorRGB.Blue}
          placeholder={255}
          props={componentProps}
        />
      </div>
    </div>
  );

  return (
    <div
      className={"container-fluid"}
      style={{ minHeight:`${viewPortHeight - 59}px`, height:'100%', backgroundColor: mainColor, color: font }}>
      <div className={"container pt-3"}>
        <h3>Soft-UI generator</h3>
        <div
          className='row mt-4 mb-4'
          style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          <div className={"col-md-6 mb-5"}>
            <div className={"row mb-3"}>
              <div className={"col-12"}>
                <div className={"align-self-center"} style={containerStyle} />
              </div>
            </div>
            {/*Button showcase*/}
            <div className={"row"}>
              <div className={"col-12"}>
                <h6 style={{ fontWeight: "bold" }}>Button</h6>
                <div className={"row"}>
                  <div className={"col-md-4 mb-3"}>
                    <SoftUIGenButton
                      props={componentProps}
                      state={"initial"}
                      children={"Button"}
                    />
                  </div>
                  <div className={"col-md-4 mb-3"}>
                    <SoftUIGenButton
                      state={"active"}
                      props={componentProps}
                      children={"Active"}
                    />
                  </div>
                  <div className={"col-md-4 mb-3"}>
                    <SoftUIGenButton
                      state={"hover"}
                      props={componentProps}
                      children={"hover"}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*Input showcase*/}
            <div className={"row"}>
              <div className={"col-12"}>
                <h6 style={{ fontWeight: "bold" }}>Input</h6>
                <div className={"row"}>
                  <div className={"col-md-6 mb-3"}>
                    <SoftUIGenInput
                      props={componentProps}
                      state={"blur"}
                      placeholder={"Input on Blur"}
                    />
                  </div>
                  <div className={"col-md-6 mb-3"}>
                    <SoftUIGenInput
                      props={componentProps}
                      state={"focus"}
                      placeholder={"Input on Focus"}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*<div className={'row mb-3'}>*/}
            {/*  <div className={'col-9'}>*/}
            {/*    <SoftUIGenButton props={componentProps}*/}
            {/*                     onClick={getColorsFromColorMind}*/}
            {/*    children={'Get badge colors from ColorMind.io API'}/>*/}
            {/*  </div>*/}
            {/*  <div className={'col-3'}>*/}
            {/*    <a href={'http://colormind.io'}><SoftUIGenButton*/}
            {/*        props={componentProps}>*/}
            {/*      Link*/}
            {/*    </SoftUIGenButton>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className={'row'}>*/}
            {/*  <div className={'col-sm-8 text-center'}>*/}
            {/*    <Badge*/}
            {/*        style={{padding:'0.375rem 0.75rem',*/}
            {/*          backgroundColor:`rgb(${badgeColors[1][0]},${badgeColors[1][1]},${badgeColors[1][2]})`,*/}
            {/*          color:fontColor(badgeColors[1][0],badgeColors[1][1],badgeColors[1][2])*/}
            {/*        }}*/}
            {/*    >Badge</Badge>*/}
            {/*    <Badge style={{padding:'0.375rem 0.75rem',*/}
            {/*      backgroundColor:`rgb(${badgeColors[2][0]},${badgeColors[2][1]},${badgeColors[2][2]})`,*/}
            {/*      color:fontColor(badgeColors[2][0],badgeColors[2][1],badgeColors[2][2])*/}
            {/*    }}*/}
            {/*    >Badge</Badge>*/}
            {/*    <Badge style={{padding:'0.375rem 0.75rem',*/}
            {/*      backgroundColor:`rgb(${badgeColors[3][0]},${badgeColors[3][1]},${badgeColors[3][2]})`,*/}
            {/*      color:fontColor(badgeColors[3][0],badgeColors[3][1],badgeColors[3][2])}}*/}
            {/*    >Badge*/}
            {/*    </Badge>*/}
            {/*    <Badge style={{padding:'0.375rem 0.75rem',*/}
            {/*      backgroundColor:`rgb(${badgeColors[4][0]},${badgeColors[4][1]},${badgeColors[4][2]})`,*/}
            {/*      color:fontColor(badgeColors[4][0],badgeColors[4][1],badgeColors[4][2])*/}
            {/*    }}*/}
            {/*    >Badge</Badge>*/}
            {/*  </div>*/}
            {/*  <div className={'col-sm-4 text-center'}>*/}
            {/*    <Badge*/}
            {/*        type={'small'}*/}
            {/*        style={{padding:'0.375rem 0.75rem',*/}
            {/*          backgroundColor:`rgb(${badgeColors[1][0]},${badgeColors[1][1]},${badgeColors[1][2]})`,*/}
            {/*          color:fontColor(badgeColors[1][0],badgeColors[1][1],badgeColors[1][2])*/}
            {/*        }}*/}

            {/*    >Badge</Badge>*/}
            {/*    <Badge*/}
            {/*        type={'small'}*/}
            {/*        style={{padding:'0.375rem 0.75rem',*/}
            {/*      backgroundColor:`rgb(${badgeColors[2][0]},${badgeColors[2][1]},${badgeColors[2][2]})`,*/}
            {/*      color:fontColor(badgeColors[2][0],badgeColors[2][1],badgeColors[2][2])*/}
            {/*    }}*/}
            {/*    >Badge</Badge>*/}
            {/*    <Badge*/}
            {/*        type={'small'}*/}
            {/*        style={{padding:'0.375rem 0.75rem',*/}
            {/*      backgroundColor:`rgb(${badgeColors[3][0]},${badgeColors[3][1]},${badgeColors[3][2]})`,*/}
            {/*      color:fontColor(badgeColors[3][0],badgeColors[3][1],badgeColors[3][2])}}*/}
            {/*    >Badge*/}
            {/*    </Badge>*/}
            {/*    <Badge*/}
            {/*        type={'small'}*/}
            {/*        style={{padding:'0.375rem 0.75rem',*/}
            {/*      backgroundColor:`rgb(${badgeColors[4][0]},${badgeColors[4][1]},${badgeColors[4][2]})`,*/}
            {/*      color:fontColor(badgeColors[4][0],badgeColors[4][1],badgeColors[4][2])*/}
            {/*    }}*/}
            {/*    >Badge</Badge>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className={"col-md-6"}>
            <div
              style={{
                minHeight: "100px",
                backgroundColor: mainColor,
                color: font,
                mixBlendMode: "normal",
                boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                                 -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
                border: `1px solid ${mainColor}`,
                borderRadius: `${borderRadius}px`,
              }}
              className={"pt-3 pb-3 pl-3 pr-3"}
            >
              <div className={"row"}>
                <div className={"col-6 mr-3"}>
                  <h5>Pick a color:</h5>
                </div>
              </div>
              <div className={'row mb-3'}>
                <div className={'col-2'}>
                    <ColorPickerSketch />
                </div>
                <div className={'col-7'}>
                  <SoftUIGenButton props={componentProps}
                                   onClick={generateRandom}
                                   children={'Random color'}
                  />
                </div>
                <div className={'col-3'}>
                  <SoftUIGenButton props={componentProps}
                                   onClick={resetTheme}
                                   children={'Reset'}
                  />
                </div>
              </div>
              <div className={"row mb-3"}>
                <div className={"col-4"}>
                  <SoftUIGenButton
                      props={componentProps}
                      children={colorInputMode ? "Hex" : "RGB"}
                      onClick={() => setColorInputMode(!colorInputMode)}
                  />
                </div>
                <div className={"col-8"}>
                  <SoftUIGenButton
                      props={componentProps}
                      onClick={() => inverseFont()}
                      children={'Change font color'}
                  />
                </div>
              </div>
              {colorInputMode ? hexInput : rgbInput}
              <div className={"row"}>
                <div className={"col-md-4"}>
                  <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Blur</Badge></h6>
                  <SoftUIGenInput
                    type={"number"}
                    onChange={onChangeBlur}
                    value={shadowBlur}
                    placeholder={"30"}
                    props={componentProps}
                  />
                </div>
                <div className={"col-md-4"}>
                  <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Radius</Badge></h6>
                  <SoftUIGenInput
                    type={"number"}
                    onChange={onChangeRadius}
                    value={borderRadius}
                    placeholder={"12"}
                    props={componentProps}
                  />
                </div>
                <div className={"col-md-4"}>
                  <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Shadow Length</Badge></h6>
                  <SoftUIGenInput
                    type={"number"}
                    onChange={onChangeShadowLength}
                    value={shadowLength}
                    placeholder={"5px"}
                    props={componentProps}
                  />
                </div>
                <div className={"col-sm-6"}>
                  <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Dark Shadow</Badge></h6>
                  <SoftUIGenInput
                    type={"number"}
                    onChange={onChangeDarkShadowFactor}
                    value={Math.round(darkShadowFactor * 100)}
                    placeholder={"dark shadow factor"}
                    props={componentProps}
                  />
                </div>
                <div className={"col-sm-6"}>
                  <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Light Shadow</Badge></h6>
                  <SoftUIGenInput
                    type={"number"}
                    onChange={onChangeLightShadowFactor}
                    value={Math.round(lightShadowFactor * 100)}
                    placeholder={"light shadow factor"}
                    props={componentProps}
                  />
                </div>
              </div>
              <div>
                <pre
                  className={"pt-3 pb-3 pr-1 pl-3"}
                  style={{
                    backgroundColor: codeBackgroundColor,
                    borderRadius: "12px",
                    boxShadow: `${codeBackgroundColor} 2px 2px 10px 0px inset, ${codeBackgroundColor} -2px -2px 10px 0px inset`,
                  }}
                >
                  <code style={{ fontSize: "10px", color: codeFontColor }}>
                    <span style={{ color: "#ed2939" }}>background:</span>{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {colorInputMode
                        ? `#${colorHEX}`
                        : `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`}
                    </span>
                    ;<br />
                    <span style={{ color: "#ed2939" }}>
                      border-radius:
                    </span>{" "}
                    {borderRadius}px;
                    <br />
                    <span style={{ color: "#ed2939" }}>box-shadow:</span>{" "}
                    {shadowLength}px {shadowLength}px {shadowBlur}px 0{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {colorInputMode
                        ? `#${toHex(darkerShadows[0])}${toHex(
                            darkerShadows[1]
                          )}${toHex(darkerShadows[2])}`
                        : `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`}
                    </span>
                    ,
                    <br />
                    {"            "}-{shadowLength}px -{shadowLength}px{" "}
                    {shadowBlur}px 0{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {colorInputMode
                        ? `#${toHex(lighterShadows[0])}${toHex(
                            lighterShadows[1]
                          )}${toHex(lighterShadows[2])}`
                        : `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`}
                    </span>
                    ;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<BuyMeACoffee/>*/}
    </div>
  );
};

export default Generator;
