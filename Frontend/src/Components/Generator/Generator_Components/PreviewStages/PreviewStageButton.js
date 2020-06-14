import React, {useContext, Fragment} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import Button from "../../../Updated/Button";
import PreviewButtonRegular from "../PreviewButtons/PreviewButtonRegular";


const PreviewStageButton = () => {

    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
    } = themeContext;

    const {Red, Green, Blue} = colorRGB;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const componentPropsFontColor = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };

    return (
        <Fragment>
            <h6 style={{ fontWeight: "bold" }}>Regular button states</h6>
            <div className={"row mt-3 mb-1"}>
                <div className={"col-md-4 mb-3"}>
                    <Button
                        props={componentPropsFontColor}
                        state={"initial"}
                        children={"Button"}
                    />
                </div>
                <div className={"col-md-4 mb-3"}>
                    <PreviewButtonRegular
                        lightShadow={"#FFF"}
                        darkShadow={"#D9D9D9"}
                        state="hover"
                        props={componentPropsFontColor}
                        children={"hover"}
                    />
                </div>
                <div className={"col-md-4 mb-3"}>
                    <PreviewButtonRegular
                        state={"active"}
                        props={componentPropsFontColor}
                        children={"Active"}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default PreviewStageButton;
