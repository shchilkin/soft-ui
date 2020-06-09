import React, {useContext} from "react";
import PreviewStagesWrapper from "./PreviewStages/PreviewStagesWrapper";
import ThemeContext from "../../../contexts/theme/ThemeContext";

const SoftUIPreview = () => {

    const {colorHEX} = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: `#${colorHEX}`}}>
            <PreviewStagesWrapper/>
        </div>
    )
}

export default SoftUIPreview;