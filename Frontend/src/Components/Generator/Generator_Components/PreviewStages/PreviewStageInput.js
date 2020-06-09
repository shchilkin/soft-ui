import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import Input from "../Layout/Input";

const PreviewStageInput = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength} = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;


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
            <div className={"row"}>
                <div className={"col-12"}>
                    <h6 style={{ fontWeight: "bold" }}>Input (Text)</h6>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <Input
                                props={componentProps}
                                state={"blur"}
                                placeholder={"Input on Blur"}
                            />
                        </div>
                        <div className={"col-6"}>
                            <Input
                                props={componentProps}
                                state={"focus"}
                                placeholder={"Input on Focus"}
                            />
                        </div>
                    </div>
                    <h6 style={{ fontWeight: "bold" }}>Range</h6>
                    <div className={"row"}>
                        <div className={"col-12 mb-3"}>
                            <Input
                                type={'range'}
                                props={componentProps}
                                state={"blur"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageInput;
