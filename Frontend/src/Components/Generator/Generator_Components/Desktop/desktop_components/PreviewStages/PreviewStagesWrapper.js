import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import PreviewStageDefault from "./PreviewStageDefault";
import PreviewStageZero from "./PreviewStageZero";
import PreviewStageOne from "./PreviewStageOne";
import PreviewStageTwo from "./PreviewStageTwo";
import PreviewStageThree from "./PreviewStageThree";
import PreviewStageFive from "./PreviewStageFive";
import PreviewStageFour from "./PreviewStageFour";
import PreviewStageSix from "./PreviewStageSix";


const PreviewStagesWrapper = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return <PreviewStageZero/>
        case 1:
            return <PreviewStageOne/>
        case 2:
            return <PreviewStageTwo/>
        case 3:
            return <PreviewStageThree/>
        case 4:
            return <PreviewStageFour/>
        case 5:
            return <PreviewStageFive/>
        case 6:
            return <PreviewStageSix/>
        default:
            return <PreviewStageDefault/>
    }
};

export default PreviewStagesWrapper;