import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import Card from "../Layout/Card";
import Badge from "../../../Badge/Badge.component";


const PreviewStageChooseColor = () => {

    const {shadows}  = useContext(ThemeContext);

    const darkShadowColor = `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`

    return (
        <Card style={{
            gridRow:'2/3',
            gridColumn:'2/3',
        }}>
            <Badge background={darkShadowColor}>Preview</Badge>
        </Card>
    )
}

export default PreviewStageChooseColor;