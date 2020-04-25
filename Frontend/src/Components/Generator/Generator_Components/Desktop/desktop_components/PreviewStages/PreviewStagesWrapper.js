import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import PreviewStageDefault from "./PreviewStageDefault";
import PreviewStageZero from "./PreviewStageZero";


const PreviewStagesWrapper = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return (<PreviewStageZero />)
        default:
            return (<PreviewStageDefault />)
    }
};

export default PreviewStagesWrapper;