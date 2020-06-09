import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import Card from "../Layout/Card";
import Badge from "../../../Badge/Badge.component";


const PreviewStageChooseColor = () => {

    const {colorRGB, shadows}  = useContext(ThemeContext);

    const {Red, Green, Blue} = colorRGB;


    const darkShadowColor = `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`

    return (
        <div>
            <div className={"row mb-3"}>
                <div style={{
                    minHeight:'300px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:24,
                    paddingTop:'1rem',
                    paddingBottom:'1rem',
                    background:`rgb(${Red},${Green},${Blue})`}}
                    className={"col"}>
                    <Card style={{
                        width:'90%',
                        height: '90%'}}>
                        <Badge background={darkShadowColor}>Preview</Badge>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PreviewStageChooseColor;