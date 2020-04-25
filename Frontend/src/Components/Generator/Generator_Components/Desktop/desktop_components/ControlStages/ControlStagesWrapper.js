import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import ControlStageDefault from "./ControlStageDefault";
import ControlStageZero from "./ControlStageZero";
import ControlStageOne from "./ControlStageOne";
import ControlStageTwo from "./ControlStageTwo";


const ControlStagesWrapper = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return <ControlStageZero />
        case 1:
            return <ControlStageOne />
        case 2:
            return <ControlStageTwo />
        default:
            return <ControlStageDefault />
    }
};

export default ControlStagesWrapper;