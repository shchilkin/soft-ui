import React, {useContext} from "react";
import GenerationContext from "../../../../../../contexts/generation(Desktop)/GenerationContext";
import ControlStageDefault from "./ControlStageDefault";
import Showcase from "./Showcase";
import ControlStageChooseColor from "./ControlStageChooseColor";
import ControlStageCard from "./ControlStageCard";
import ControlStageButton from "./ControlStageButton";
import ControlStageBadge from "./ControlStageBadge";
import ControlStageInput from "./ControlStageInput";
import ControlStageGenerateCSS from "./ControlStageGenerateCSS";


const ControlStagesWrapper = () => {
    const generationContext = useContext(GenerationContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return <Showcase />
        case 1:
            return <ControlStageChooseColor />
        case 2:
            return <ControlStageCard />
        case 3:
            return <ControlStageButton />
        case 4:
            return <ControlStageInput />
        case 5:
            return <ControlStageBadge />
        case 6:
            return <ControlStageGenerateCSS/>
        default:
            return <ControlStageDefault />
    }
};

export default ControlStagesWrapper;