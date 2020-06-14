import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import Card from "../../../Updated/Card";
import Badge from "../../../Badge/Badge.component";


const PreviewStageChooseColor = () => {

    const {colorHEX,font, shadows}  = useContext(ThemeContext);

    const darkShadowColor = `rgb(${shadows.darkerShadowArray[0]},${shadows.darkerShadowArray[1]},${shadows.darkerShadowArray[2]})`

    return (
        <Card
            backgroundColor={`#${colorHEX}`}
            isSameColorShadow={true}
            fontColor={font}
            style={{height:'100%'}}>
            <Badge background={darkShadowColor}>Preview</Badge>
        </Card>
    )
}

export default PreviewStageChooseColor;