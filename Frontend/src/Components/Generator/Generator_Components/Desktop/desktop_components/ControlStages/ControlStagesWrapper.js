import React, {useContext} from "react";
import StagesContext from "../../../../../../contexts/Stages/StagesContext";
import ControlStageDefault from "./ControlStageDefault";
import Showcase from "./Showcase(StageZero)/Showcase";
import ControlStageChooseColor from "./ControlStageChooseColor";
import ControlStageCard from "./ControlStageCard";
import ControlStageButton from "./ControlStageButton";
import ControlStageBadge from "./ControlStageBadge";
import ControlStageInput from "./ControlStageInput";
import ControlStageGenerateCSS from "./ControlStageGenerateCSS";


const ControlStagesWrapper = () => {
    const generationContext = useContext(StagesContext);
    const { stage } = generationContext;

    switch (stage) {
        case 0:
            return <Showcase />
        case 1:
            return <ControlStageChooseColor />
        case 2:
            return <ControlStageButton />
        case 3:
            return <ControlStageCard />
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