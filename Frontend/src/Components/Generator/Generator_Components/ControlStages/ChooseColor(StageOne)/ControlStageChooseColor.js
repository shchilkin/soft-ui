import React, {Fragment, useContext, useState} from "react";
import ThemeContext from "../../../../../contexts/theme/ThemeContext";
import {
    calculateTintAndShades,
    fontColorHex,
    getRandomInt
} from "../../../../../Functions";
import Button from "../../Layout/Button";
import Card from "../../Layout/Card";
import RGBinput from "./RGBinput";
import Input from "../../Layout/Input";
import Badge from "../../../../Badge/Badge.component";
import IconButton from "./IconButton";

const ControlStageChooseColor = () => {
    const themeContext = useContext(ThemeContext);
    const {
        colorHEX,
        changeColor,
        shadowBlur,
        shadowLength,
        resetTheme,
        inverseFont,} = themeContext;

    const controlCardBG = "#F0F0F0";
    const font = fontColorHex(controlCardBG);
    const darkShadow = calculateTintAndShades(240,240,240,85)
    const lightShadow = calculateTintAndShades(240,240,240,105)

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(false);

    const generateRandom = () => {
        let rgbObject = {
            Red:getRandomInt(255),
            Green:getRandomInt(255),
            Blue:getRandomInt(255)
        }
        changeColor('RGB', rgbObject);
    }

    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);

    const hexInput = (
        <Input
        onChange={(event) => onChangeColor(event, "Hex")}
        value={colorHEX}
        style={{maxHeight:'32px', border: "0px",marginBottom:'0',textAlign:'center',
            borderRadius:'6px'}}
        placeholder={"#000000"}
    />
    )


    const resetIcon = {
        viewBox: "0 0 246 228",
        path: "M146.542,187.72l13.482,30.539c-27.652,12.208 -59.022,12.931 -87.208,2.01c-58.655,-22.727 -87.824,-88.798 -65.098,-147.453c22.727,-58.655 88.798,-87.824 147.453,-65.098c27.434,10.63 49.664,31.442 62.089,58.045l28.286,-13.261l-8.281,96.032l-79.117,-55.057l28.886,-13.543c-8.78,-18.831 -24.509,-33.566 -43.923,-41.088c-41.476,-16.071 -88.195,4.555 -104.265,46.03c-16.071,41.476 4.555,88.195 46.03,104.266c19.931,7.722 42.113,7.211 61.666,-1.422Z"
    }

    const randomIcon = {
        viewBox: "0 0 239 255",
        path: "M73.375,107.105c2.59,5.317 6.526,10.072 11.708,13.708l58.64,41.141l8.289,31.143c4.889,18.369 -6.056,37.252 -24.425,42.141l-66.565,17.716c-18.369,4.889 -37.252,-6.056 -42.141,-24.425l-17.716,-66.565c-4.889,-18.369 6.056,-37.252 24.425,-42.141l47.785,-12.718Zm-31.549,58.229c11.055,-2.942 22.418,3.644 25.36,14.699c2.942,11.054 -3.644,22.418 -14.698,25.36c-11.055,2.942 -22.418,-3.644 -25.36,-14.699c-2.942,-11.054 3.644,-22.418 14.698,-25.36Zm58.863,-15.666c11.055,-2.942 22.418,3.644 25.36,14.699c2.942,11.054 -3.644,22.417 -14.698,25.36c-11.055,2.942 -22.418,-3.645 -25.36,-14.699c-2.942,-11.054 3.644,-22.418 14.698,-25.36Zm131.635,-55.888c10.917,-15.561 7.147,-37.057 -8.414,-47.975l-56.388,-39.561c-15.561,-10.918 -37.058,-7.148 -47.975,8.413l-39.562,56.389c-10.917,15.561 -7.147,37.058 8.414,47.975l56.388,39.562c15.561,10.917 37.058,7.147 47.975,-8.414l39.562,-56.389Zm-72.02,-40.639c16.156,2.289 27.413,17.265 25.123,33.421c-2.29,16.156 -17.265,27.414 -33.421,25.124c-16.156,-2.29 -27.414,-17.266 -25.124,-33.422c2.29,-16.156 17.265,-27.413 33.422,-25.123Z"
    }

    const inverseSVG = (
        <svg width="100%"
             height="100%"
             viewBox="0 0 347 360"
             style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
            <g>
                <path d="M115.5,359.61l113.177,-359.61l27.92,0c49.619,0 89.903,40.284 89.903,89.903l0,179.805c0,49.618 -40.284,89.902 -89.903,89.902l-141.097,0Z"
                      style={{fill: "#303030"}}/>
                <path d="M222.513,257.319l-9.569,-25.155l-81.478,0l-9.57,25.701c-3.736,10.026 -6.926,16.793 -9.569,20.302c-2.643,3.508 -6.972,5.263 -12.987,5.263c-5.104,0 -9.616,-1.868 -13.535,-5.605c-3.918,-3.737 -5.878,-7.975 -5.878,-12.714c0,-2.734 0.456,-5.559 1.367,-8.476c0.911,-2.916 2.415,-6.972 4.511,-12.167l51.266,-130.146c1.458,-3.737 3.213,-8.225 5.263,-13.466c2.051,-5.24 4.238,-9.592 6.562,-13.055c2.324,-3.464 5.377,-6.266 9.16,-8.408c3.782,-2.142 8.453,-3.212 14.012,-3.212c5.651,0 10.367,1.07 14.15,3.212c3.782,2.142 6.835,4.899 9.159,8.271c2.324,3.372 4.283,6.995 5.878,10.868c1.595,3.874 3.623,9.046 6.084,15.517l52.359,129.325c4.101,9.843 6.152,16.998 6.152,21.464c0,4.648 -1.937,8.908 -5.81,12.782c-3.874,3.873 -8.544,5.81 -14.013,5.81c-3.19,0 -5.924,-0.57 -8.202,-1.709c-2.279,-1.139 -4.193,-2.689 -5.742,-4.648c-1.549,-1.96 -3.213,-4.967 -4.99,-9.023c-1.777,-4.055 -3.304,-7.633 -4.58,-10.731Zm-80.384,-55.641l59.878,0l-30.212,-82.708l-29.666,82.708Z"
                      style={{fill: "#303030",fillRule:"nonzero"}}/>
                      <clipPath id="_clip1"><
                          path d="M222.513,257.319l-9.569,-25.155l-81.478,0l-9.57,25.701c-3.736,10.026 -6.926,16.793 -9.569,20.302c-2.643,3.508 -6.972,5.263 -12.987,5.263c-5.104,0 -9.616,-1.868 -13.535,-5.605c-3.918,-3.737 -5.878,-7.975 -5.878,-12.714c0,-2.734 0.456,-5.559 1.367,-8.476c0.911,-2.916 2.415,-6.972 4.511,-12.167l51.266,-130.146c1.458,-3.737 3.213,-8.225 5.263,-13.466c2.051,-5.24 4.238,-9.592 6.562,-13.055c2.324,-3.464 5.377,-6.266 9.16,-8.408c3.782,-2.142 8.453,-3.212 14.012,-3.212c5.651,0 10.367,1.07 14.15,3.212c3.782,2.142 6.835,4.899 9.159,8.271c2.324,3.372 4.283,6.995 5.878,10.868c1.595,3.874 3.623,9.046 6.084,15.517l52.359,129.325c4.101,9.843 6.152,16.998 6.152,21.464c0,4.648 -1.937,8.908 -5.81,12.782c-3.874,3.873 -8.544,5.81 -14.013,5.81c-3.19,0 -5.924,-0.57 -8.202,-1.709c-2.279,-1.139 -4.193,-2.689 -5.742,-4.648c-1.549,-1.96 -3.213,-4.967 -4.99,-9.023c-1.777,-4.055 -3.304,-7.633 -4.58,-10.731Zm-80.384,-55.641l59.878,0l-30.212,-82.708l-29.666,82.708Z"
                               clipRule="nonzero"/>
                      </clipPath>
                <g clipPath="url(#_clip1)">
                    <path d="M115.5,359.61l113.177,-359.61l27.92,0c49.619,0 89.903,40.284 89.903,89.903l0,179.805c0,49.618 -40.284,89.902 -89.903,89.902l-141.097,0Z"
                          style={{fill: "#ebebeb"}}/>
                </g>
            </g>
        </svg>
    )

    return (
        <Fragment>
            <div className={'mb-3'}>
                <Card
                    background={controlCardBG}
                    darkShadow={darkShadow}
                    lightShadow={lightShadow}
                >
                    <h5 style={{marginLeft:'15px',color:font}}>Pick a color</h5>
                    <div className={'container pb-3'} style={{
                        backgroundColor:controlCardBG,
                        borderBottomRightRadius:'8px',borderBottomLeftRadius:'8px'}}>
                        <div style={{display:'inline-block', marginBottom:".5rem"}}>
                            <IconButton
                                title="Inverse text color"
                                background={controlCardBG}
                                isSVGinChildren={true}
                                onClick={() => inverseFont()}>
                                {inverseSVG}
                            </IconButton>
                            <IconButton
                                title={"Generate random color"}
                                onClick={generateRandom}
                                background={controlCardBG}
                                path={randomIcon.path}
                                viewBox={randomIcon.viewBox}
                            />
                            <IconButton
                                title={"Reset to default color"}
                                onClick={resetTheme}
                                background={controlCardBG}
                                path={resetIcon.path}
                                viewBox={resetIcon.viewBox}
                            />
                        </div>
                        <div className={'row'}>
                            <div className={'mb-3 col-md-4'}>
                                <Button
                                    sameShadowColor={true}
                                    background={controlCardBG}
                                    color={font}
                                    style={{height:'50px'}}
                                    onClick={() =>setColorInputMode(!colorInputMode)}
                                    children={ colorInputMode ? "Hex" :'RGB'}/>
                            </div>
                            <div className={'col-md-8'}>
                                <div style={{borderRadius:'12px',
                                    boxShadow:`5px 5px 30px 0 
                                    ${calculateTintAndShades(240,240,240,85)},
                                     -5px -5px 30px 0 ${calculateTintAndShades(240,240,240,105)}`,}}>
                                    <div style={{padding:'9px',borderRadius:'12px',
                                        borderTopLeftRadius:'0',borderBottomLeftRadius:'0'
                                    }}>
                                        {colorInputMode ? hexInput : <RGBinput/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default ControlStageChooseColor;