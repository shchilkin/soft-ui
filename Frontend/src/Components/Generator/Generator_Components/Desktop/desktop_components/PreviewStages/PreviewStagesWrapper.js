import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import PreviewStageDefault from "./PreviewStageDefault";
import PreviewStageAbout from "./PreviewStageAbout";
import PreviewStageChooseColor from "./PreviewStageChooseColor";
import PreviewStageCard from "./PreviewStageCard";
import PreviewStageButton from "./PreviewStageButton";
import PreviewStageBadge from "./PreviewStageBadge";
import PreviewStageInput from "./PreviewStageInput";
import PreviewStageGenerateCSS from "./PreviewStageGenerateCSS";


const PreviewStagesWrapper = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return <PreviewStageAbout/>
        case 1:
            return <PreviewStageChooseColor/>
        case 2:
            return <PreviewStageCard/>
        case 3:
            return <PreviewStageButton/>
        case 4:
            return <PreviewStageInput/>
        case 5:
            return <PreviewStageBadge/>
        case 6:
            return <PreviewStageGenerateCSS/>
        default:
            return <PreviewStageDefault/>
    }
};

export default PreviewStagesWrapper;