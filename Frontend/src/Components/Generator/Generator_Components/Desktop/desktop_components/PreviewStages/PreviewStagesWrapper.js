import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import PreviewStageDefault from "./PreviewStageDefault";
import PreviewStageZero from "./PreviewStageZero";
import PreviewStageOne from "./PreviewStageOne";


const PreviewStagesWrapper = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return <PreviewStageZero />
        case 1:
            return <PreviewStageOne />
        default:
            return <PreviewStageDefault />
    }
};

export default PreviewStagesWrapper;