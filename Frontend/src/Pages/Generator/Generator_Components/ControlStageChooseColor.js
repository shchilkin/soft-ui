import React, { Fragment, useContext, useState } from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import {
    getRandomInt
} from "../../../Functions";
import { getFontColorHex } from '@soft-ui-generator/color-processing-library';
import Button from "../../../Components/Updated/Button";
import RGBinput from "./RGBinput";
import TextInput from "../../../Components/Updated/TextInput";
import IconButton from "./IconButton";
import Card from "../../../Components/Updated/Card";
import ColorButton from "../../../Components/Updated/ColorButton";
import SoftUIShadowsLogo from "./SoftUIShadowsLogo";


const ControlStageChooseColor = () => {
    const {colorHEX, font, changeColor, resetTheme, inverseFont}  = useContext(ThemeContext);

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(true);
    const [isDarkModeSectionSelected, setIsDarkModeSectionSelected] = useState(!false);
    const [isAdditionalColorSectionSelected, setIsAdditionalColorSectionSelected] = useState(false);

    const controlCardBG = "#F0F0F0";
    const controlCardFont = getFontColorHex(controlCardBG);


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
        <TextInput
            shadowColorBase={"#F0F0F0"}
            onChange={(event) => onChangeColor(event, "Hex")}
            value={colorHEX}
            backgroundColor={`#${colorHEX}`}
            fontColor={font}
            style={{height:'38px', border: "0px",marginBottom:'0',textAlign:'center',
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

    const darkModeIcon = (
        <svg width="100%"
             height="100%"
             viewBox="0 0 752 752"
             style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
            <g>
                <path d="M375.758,0c-207.387,0 -375.758,168.371 -375.758,375.758c0,207.386 168.371,375.757 375.758,375.757c-80.502,-76.632 -145.86,-218.623 -145.86,-375.757c0,-157.135 65.358,-299.125 145.86,-375.758Z"
                      style={{fill: '#303030'}}/>
                <circle cx="565.37" cy="208.234" r="55.164" style={{fill: '#303030'}}/>
                <circle cx="436.511" cy="390.946" r="40.097" style={{fill: '#303030'}}/>
                <circle cx="639.972" cy="558.349" r="40.097" style={{fill: '#303030'}}/>
            </g>
        </svg>
    )

    const colorPanelIcon = (
        <svg width="100%"
             height="100%"
             viewBox="0 0 1284 1284"
             style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
            <g>
                <path d="M1283.38,320.845c0,-177.079 -143.766,-320.845 -320.846,-320.845l-641.69,0c-177.079,0 -320.845,143.766 -320.845,320.845l0,641.69c0,177.08 143.766,320.846 320.845,320.846l641.69,0c177.08,0 320.846,-143.766 320.846,-320.846l0,-641.69Zm-173.398,-30.374c0,-64.615 -52.459,-117.073 -117.073,-117.073l-702.439,0c-64.615,0 -117.073,52.458 -117.073,117.073l0,702.439c0,64.614 52.458,117.073 117.073,117.073l702.439,0c64.614,0 117.073,-52.459 117.073,-117.073l0,-702.439Z"
                      style={{fill: "#303030"}}/>
                      <path d="M612.448,381.611c0,-42.467 -34.478,-76.945 -76.946,-76.945l-153.891,0c-42.467,0 -76.945,34.478 -76.945,76.945l0,153.891c0,42.468 34.478,76.946 76.945,76.946l153.891,0c42.468,0 76.946,-34.478 76.946,-76.946l0,-153.891Z"
                            style={{fill: "#fa4545"}}/>
                            <path d="M978.715,381.611c0,-42.467 -34.478,-76.945 -76.946,-76.945l-153.891,0c-42.467,0 -76.945,34.478 -76.945,76.945l0,153.891c0,42.468 34.478,76.946 76.945,76.946l153.891,0c42.468,0 76.946,-34.478 76.946,-76.946l0,-153.891Z"
                                  style={{fill: "#fae247"}}/>
                                  <path d="M612.448,747.878c0,-42.467 -34.478,-76.945 -76.946,-76.945l-153.891,0c-42.467,0 -76.945,34.478 -76.945,76.945l0,153.891c0,42.468 34.478,76.946 76.945,76.946l153.891,0c42.468,0 76.946,-34.478 76.946,-76.946l0,-153.891Z"
                                        style={{fill: "#476bfa"}}/>
                                        <path d="M978.715,747.878c0,-42.467 -34.478,-76.945 -76.946,-76.945l-153.891,0c-42.467,0 -76.945,34.478 -76.945,76.945l0,153.891c0,42.468 34.478,76.946 76.945,76.946l153.891,0c42.468,0 76.946,-34.478 76.946,-76.946l0,-153.891Z"
                                              style={{fill: "#47fa98"}}/>
            </g>
        </svg>
    )

    const colors = [
        '#B32E42','#ED2939','#FDE74C','#DCFE4B',
        '#8BD173','#04A883','#ADC009','#03FA74',
        '#57E2E5','#33D2D0','#56CAF4','#1337FE',
        '#FBA50E','#E7CFCD','#FCB5B5','#E8E9EB',
        '#F0E3D6','#bfb0b7','#E63387','#530522',
    ];

    return (
        <div style={{
            display:'grid',
            gridTemplateRows:'1fr 1fr',
            gridColumnGap:'10px',
            gridRowGap:'15px',
            gridTemplateColumns:"5fr 1fr repeat(5, 40px)"
        }}>
            <h4 style={{color:controlCardFont}}>Pick a color</h4>
            <Fragment>
                <IconButton
                    style={{
                        gridColumn:'3/4',
                        gridRow:'2/3',
                    }}
                    title="Inverse text color"
                    background={controlCardBG}
                    isSVGinChildren={true}
                    onClick={() => inverseFont()}>
                    {inverseSVG}
                </IconButton>
                <IconButton
                    style={{
                        gridColumn:'4/5',
                        gridRow:'2/3',
                    }}
                    title={"Generate random color"}
                    onClick={generateRandom}
                    background={controlCardBG}
                    path={randomIcon.path}
                    viewBox={randomIcon.viewBox}
                />
                <IconButton
                    style={{
                        gridColumn:'7/7',
                        gridRow:'2/3',
                    }}
                    title={"Reset to default color"}
                    onClick={resetTheme}
                    background={controlCardBG}
                    path={resetIcon.path}
                    viewBox={resetIcon.viewBox}
                />
                <IconButton
                    isActive={isDarkModeSectionSelected}
                    style={{
                        gridColumn:'5/5',
                        gridRow:'2/3',
                    }}
                    title={isDarkModeSectionSelected ? "Collapse dark mode section": "Show dark mode section"}
                    onClick={() => setIsDarkModeSectionSelected(!isDarkModeSectionSelected)}
                    background={controlCardBG}
                    isSVGinChildren={true}
                >{darkModeIcon}</IconButton>
                <IconButton
                    isActive={isAdditionalColorSectionSelected}
                    style={{
                        gridColumn:'6/6',
                        gridRow:'2/3',
                    }}
                    title={isAdditionalColorSectionSelected ? "Collapse additional color section"
                        : "Show additional color section"}
                    onClick={() => setIsAdditionalColorSectionSelected(!isAdditionalColorSectionSelected)}
                    background={controlCardBG}
                    isSVGinChildren={true}
                >{colorPanelIcon}</IconButton>
            </Fragment>
            <div style={{borderRadius:'12px',
                gridColumn:'1/2',
                gridRow:'2/3',}}>
                {colorInputMode ? hexInput : <RGBinput/>}
            </div>
            <Button
                sameShadowColor={true}
                shadowBlur={15}
                background={controlCardBG}
                color={controlCardFont}
                style={{
                    height:'38px',
                    gridColumn:'2/3',
                    gridRow:'2/3',
                    borderRadius:'6px'
                }}
                onClick={() =>setColorInputMode(!colorInputMode)}
                children={ colorInputMode ? "Hex" :'RGB'}/>
            {
                isAdditionalColorSectionSelected && <Card
                backgroundColor={"#F0F0F0"}
                sameColorShadow={true}
                lightShadowFactor={95}
                borderRadius={6}
                isInsetShadow={true}
                style={{
                    display: 'grid',
                    justifyContent: 'center', alignItems: 'center',
                    gridColumn: '1/8', gridRow: '3/3'
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center', alignItems: 'center',
                    }}
                >
                    {colors.map(color => <ColorButton onClick={() => changeColor("Hex", color)} color={color}/>)}
                </div>
            </Card>}
            {isDarkModeSectionSelected &&
            <Card
                shadowLength={10}
                isInsetShadow={true}
                backgroundColor={'#606060'}
                isSameColorShadow={true}
                fontColor={'#F0F0F0'}
                borderRadius={6}
                style={{ gridColumn:'1/8', gridRow:'4/4'}}>
                    <div style={{
                        display:"grid",
                        gridGap:"10px",
                        gridTemplateRows:'1fr 1fr 1fr 1fr',
                        gridTemplateColumns:'50px 2fr'
                    }}>
                        <div style={{gridRow:'1/2',gridColumn:'1/3'}}>
                            <SoftUIShadowsLogo
                                height={'35px'}
                                width={'35px'}
                                mainColor={'#606060'} darkShadow={"#525252"} lightShadow={'#656565'}/>
                        </div>
                        <div style={{gridRow:'1/2',gridColumn:'2/3'}}>
                            <h5>Dark mode settings</h5>
                        </div>
                        <div style={{gridRow:'2/3',gridColumn:'1/2'}}>
                            <SoftUIShadowsLogo
                                height={'35px'}
                                width={'35px'}
                                darkShadow={`#${colorHEX}`} mainColor={"#606060"} lightShadow={'#656565'}/>
                        </div>
                        <input style={{gridRow:'2/3',gridColumn:'2/3'}} type={'range'}/>
                        <div style={{gridRow:'3/4',gridColumn:'1/2'}}>
                            <SoftUIShadowsLogo
                                height={'35px'}
                                width={'35px'}
                                darkShadow={'#525252'} mainColor={`#${colorHEX}`}  lightShadow={'#656565'}/>
                        </div>
                        <input style={{gridRow:'3/4',gridColumn:'2/3'}} type={'range'}/>
                        <div style={{gridRow:'4/5',gridColumn:'1/2'}}>
                            <SoftUIShadowsLogo
                                height={'35px'}
                                width={'35px'}
                                mainColor={'#606060'} darkShadow={"#525252"} lightShadow={`#${colorHEX}`} />
                        </div>
                        <input style={{gridRow:'4/5',gridColumn:'2/3'}} type={'range'}/>
                    </div>
            </Card>}
        </div>
    )
}

export default ControlStageChooseColor;