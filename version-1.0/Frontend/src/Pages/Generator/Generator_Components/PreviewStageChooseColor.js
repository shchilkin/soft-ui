import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import Card from "../../../Components/Updated/Card";


const PreviewStageChooseColor = () => {

    const {colorHEX,font}  = useContext(ThemeContext);

    return (
        <Card
            id={'Preview Card Grid'}
            backgroundColor={`#${colorHEX}`}
            isSameColorShadow={true}
            fontColor={font}
            style={{height:'100%'}}/>
    )
}

export default PreviewStageChooseColor;