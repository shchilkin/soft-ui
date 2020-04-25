import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Input from "../../../Layout/Input";

const PreviewStageFour = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,} = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const viewportWidth = window.innerWidth
    function getContainerHeight(viewportWidth) {
        if(viewportWidth < 500){
            return 175
        } else return 300
    }

    const containerStyle = {
        width: "100%",
        height: `${getContainerHeight(viewportWidth)}px`,
        minHeight: "100px",
        backgroundColor: mainColor,
        color: font,
        mixBlendMode: "normal",
        boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
        border: `1px solid ${mainColor}`,
        borderRadius: `${borderRadius}px`,
    };

    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return (
        <div>
            <div className={"row d-none d-sm-block"}>
                <div className={"col-12"}>
                    <h6 style={{ fontWeight: "bold" }}>Input</h6>
                    <div className={"row"}>
                        <div className={"col-md-6 mb-3"}>
                            <Input
                                props={componentProps}
                                state={"blur"}
                                placeholder={"Input on Blur"}
                            />
                        </div>
                        <div className={"col-md-6 mb-3"}>
                            <Input
                                props={componentProps}
                                state={"focus"}
                                placeholder={"Input on Focus"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageFour;
