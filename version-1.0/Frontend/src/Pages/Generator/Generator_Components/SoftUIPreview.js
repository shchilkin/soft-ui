import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import PreviewStageChooseColor from "./PreviewStageChooseColor";

const SoftUIPreview = () => {

    const {colorHEX} = useContext(ThemeContext);

    return (
        <div
            id={'Preview Panel'}
            style={{
            height:"100%",
            display:'grid',
            gridGap:'1rem',
            gridTemplateRows:'1fr 2fr 1fr',
            gridTemplateColumns:'2rem 1fr 2rem',
            backgroundColor: `#${colorHEX}`}}>
            <div
                style={{
                    gridRow:'2/3',
                    gridColumn:'2/3',
                }}
            >
                <PreviewStageChooseColor/>
            </div>
        </div>
    )
}

export default SoftUIPreview;