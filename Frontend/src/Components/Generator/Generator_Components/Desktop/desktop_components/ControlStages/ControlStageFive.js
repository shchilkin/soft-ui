import React, {useContext} from "react";
import ThemeContext from "../../../../../../contexts/theme/ThemeContext";
import Badge from "../../../../../Badge/Badge.component";
import Input from "../../../Layout/Input";

const ControlStageFive = () => {
    const themeContext = useContext(ThemeContext);
    const {
        font,
        colorRGB,
        shadows,
        shadowBlur,
        shadowLength,
        borderRadius,
        darkShadowFactor,
        lightShadowFactor,
        changeShadowBlur,
        changeBorderRadius,
        changeShadowLength,
        changeDarkShadowFactor,
        changeLightShadowFactor,
    } = themeContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`;
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`;
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`;

    const onChangeBlur = (event) => changeShadowBlur(event.target.value);
    const onChangeRadius = (event) => changeBorderRadius(event.target.value);
    const onChangeShadowLength = (event) => changeShadowLength(event.target.value);
    const onChangeLightShadowFactor = (event) => changeLightShadowFactor(event.target.value);
    const onChangeDarkShadowFactor = (event) => changeDarkShadowFactor(event.target.value);

    const componentProps = {
        mainColor: mainColor,
        font: font,
        Blur: shadowBlur,
        shadowLength: shadowLength,
        darkerShadow: darkerShadow,
        lighterShadow: lighterShadow,
    };


    return (
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
                <div className={"col-md-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Blur</Badge></h6>
                    <Input
                        type={"number"}
                        onChange={onChangeBlur}
                        value={shadowBlur}
                        placeholder={"30"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-md-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Radius</Badge></h6>
                    <Input
                        type={"number"}
                        onChange={onChangeRadius}
                        value={borderRadius}
                        placeholder={"12"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-md-4"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Shadow Length</Badge></h6>
                    <Input
                        type={"number"}
                        onChange={onChangeShadowLength}
                        value={shadowLength}
                        placeholder={"5px"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-sm-6"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Dark Shadow</Badge></h6>
                    <Input
                        type={"number"}
                        onChange={onChangeDarkShadowFactor}
                        value={Math.round(darkShadowFactor * 100)}
                        placeholder={"dark shadow factor"}
                        props={componentProps}
                    />
                </div>
                <div className={"col-sm-6"}>
                    <h6><Badge style={{ backgroundColor: darkerShadow, color:font}}>Light Shadow</Badge></h6>
                    <Input
                        type={"number"}
                        onChange={onChangeLightShadowFactor}
                        value={Math.round(lightShadowFactor * 100)}
                        placeholder={"light shadow factor"}
                        props={componentProps}
                    />
                </div>
            </div>
        </div>
    )
}

export default ControlStageFive;