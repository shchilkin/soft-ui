import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import ControlStageDefault from "./ControlStageDefault";
import ControlStageZero from "./ControlStageZero";
import ControlStageOne from "./ControlStageOne";
import ControlStageTwo from "./ControlStageTwo";
import ControlStageThree from "./ControlStageThree";
import ControlStageFive from "./ControlStageFive";
import ControlStageFour from "./ControlStageFour";
import ControlStageSix from "./ControlStageSix";


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
        case 3:
            return <ControlStageThree />
        case 4:
            return <ControlStageFour />
        case 5:
            return <ControlStageFive />
        case 6:
            return <ControlStageSix/>
        default:
            return <ControlStageDefault />
    }
};

export default ControlStagesWrapper;