import React, {useContext} from "react";
import StagesContext from "../../../../../../contexts/Stages/StagesContext";
import PreviewStageDefault from "./PreviewStageDefault";
import PreviewStageChooseColor from "./PreviewStageChooseColor";
import PreviewStageCard from "./PreviewStageCard";
import PreviewStageButton from "./PreviewStageButton";
import PreviewStageBadge from "./PreviewStageBadge";
import PreviewStageInput from "./PreviewStageInput";
import PreviewStageGenerateCSS from "./PreviewStageGenerateCSS";


const PreviewStagesWrapper = () => {
    const stagesContext = useContext(StagesContext);
    const { stage } = stagesContext;

    switch (stage) {
        case 0:
            return <PreviewStageChooseColor/>
        case 1:
            return <PreviewStageButton/>
        case 2:
            return <PreviewStageCard/>
        case 3:
            return <PreviewStageInput/>
        case 4:
            return <PreviewStageBadge/>
        case 5:
            return <PreviewStageGenerateCSS/>
        default:
            return <PreviewStageDefault/>
    }
};

export default PreviewStagesWrapper;