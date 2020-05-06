import React, {useContext} from "react";
import Button from "../Components/Generator/Generator_Components/Layout/Button";
import {Link} from "react-router-dom";
import Card from "../Components/Generator/Generator_Components/Layout/Card";
import ColorShowcaseFragment from "../Components/FeatureShowcase/ColorShowcaseFragment";
import ShowcaseContext from "../contexts/showcase/ShowcaseContext";
import ThemeContext from "../contexts/theme/ThemeContext";
import DarkModeShowcaseFragment from "../Components/FeatureShowcase/DarkModeShowcaseFragment";
import {fontColorHex} from "../Functions";
import SecondaryColorFragment from "../Components/FeatureShowcase/SecondaryColorFragment";


const Home = () => {
    const {colorHEX, shadows} = useContext(ThemeContext);
    const colorShowcaseContext = useContext(ShowcaseContext)
    const {darkModeBackground,  backgroundColor, showcaseDarkShadow,
        showcaseLightShadow} = colorShowcaseContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    let darkShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;
    let mainColor = `#${colorHEX}`;
    let lightShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;

    let fontColor = fontColorHex(mainColor);
    console.log('COLOR HEX', colorHEX)

    console.log('shadows',showcaseDarkShadow, showcaseLightShadow)

    return (
        <div>
            <div className="jumbotron jumbotron-fluid text-center"
                 style={{background: mainColor,color: fontColor, marginBottom:0,
                     boxShadow: `${darkShadow} 0px 2px 4px`
                 }}>
                <div className="container">
                    <svg width="100px" height="100px" viewBox="0 0 173 173" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
                        <path id="BottomShadow" d="M155.311,28.461c10.358,6.678 17.223,18.317 17.223,31.547l0,75.017c0,20.702 -16.807,37.509 -37.509,37.509l-75.017,0c-13.215,0 -24.844,-6.85 -31.525,-17.19c5.851,3.773 12.815,5.962 20.286,5.962l75.017,0c20.701,0 37.508,-16.807 37.508,-37.509l0,-75.016c0,-7.486 -2.197,-14.462 -5.983,-20.32Z"
                              style={{fill:darkShadow}}/>
                        <path id="TopShadow" d="M17.209,144.064c-10.351,-6.68 -17.209,-18.315 -17.209,-31.539l0,-75.017c0,-20.701 16.807,-37.508 37.508,-37.508l75.017,0c13.239,0 24.885,6.873 31.56,17.242c-5.853,-3.777 -12.822,-5.97 -20.299,-5.97l-75.017,0c-20.701,0 -37.508,16.807 -37.508,37.509l0,75.016c0,7.463 2.184,14.42 5.948,20.267Z"
                              style={{fill:lightShadow}}/>
                        <path d="M144.085,57.385c0,-15.952 -12.951,-28.904 -28.904,-28.904l-57.808,0c-15.952,0 -28.903,12.952 -28.903,28.904l0,57.808c0,15.952 12.951,28.904 28.903,28.904l57.808,0c15.953,0 28.904,-12.952 28.904,-28.904l0,-57.808Z"
                          style={{fill:lightShadow}}/>
                    </svg>
                    <h1 className="display-4">Soft UI</h1>
                    <p className="lead">Build beautiful products in Neuromorphic stylistic</p>
                    <Link to={'/generator'}>
                        <Button
                            style={{width:'200px',height:'65px'}}
                            background={mainColor}
                            color={fontColor}
                            darkShadow={darkShadow}
                            lightShadow={lightShadow}>
                            Get started
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid"
                 style={{backgroundColor: backgroundColor,
                     boxShadow: `${darkShadow} 0px 2px 4px`,
                     marginBottom:0,}}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-4 mb-3'}>
                                <ColorShowcaseFragment  />
                        </div>
                        <div className={'col-md-4 mb-3'}>
                            <Card
                                background={darkModeBackground}
                                lightShadow={showcaseLightShadow}
                                darkShadow={showcaseDarkShadow}
                                style={{height:'100%', display:'flex'}}>
                                <DarkModeShowcaseFragment />
                            </Card>
                        </div>
                        <div className={'col-md-4 mb-3'}>
                            <SecondaryColorFragment  />
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{backgroundColor:mainColor}}>
                <div className={'container'}>
                    <div className={'row pt-3 pb-3'}>
                        <div className={'col-md-6'}>
                            <a style={{color:fontColor}}
                                href={'https://github.com/CrazyRedKitten/soft-ui'} target={'blank'}>
                            GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;