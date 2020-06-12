import React, {useContext} from "react";
import PreviewStagesWrapper from "./PreviewStages/PreviewStagesWrapper";
import ThemeContext from "../../../contexts/theme/ThemeContext";

const SoftUIPreview = () => {

    const {colorHEX} = useContext(ThemeContext);

    return (
        <div style={{
            height:"100%",
            display:'grid',
            gridGap:'1rem',
            gridTemplateRows:'1fr 2fr 1fr',
            gridTemplateColumns:'2rem 1fr 2rem',
            backgroundColor: `#${colorHEX}`}}>
            <PreviewStagesWrapper/>
        </div>
    )
}

export default SoftUIPreview;