import React, {useContext} from "react";
import StagesContext from "../../../../contexts/Stages/StagesContext";
import ControlStageDefault from "./ControlStageDefault";
import ControlStageChooseColor from "./ChooseColor(StageOne)/ControlStageChooseColor";
import ControlStageCard from "./ControlStageCard";
import ControlStageButton from "./ControlStageButton";
import ControlStageBadge from "./ControlStageBadge";
import ControlStageInput from "./ControlStageInput";
import ControlStageGenerateCSS from "./ControlStageGenerateCSS";


const ControlStagesWrapper = () => {
    const stagesContext = useContext(StagesContext);
    const { stage } = stagesContext;

    switch (stage) {
        case 0:
            return <ControlStageChooseColor />
        case 1:
            return <ControlStageButton />
        case 2:
            return <ControlStageCard />
        case 3:
            return <ControlStageInput />
        case 4:
            return <ControlStageBadge />
        case 5:
            return <ControlStageGenerateCSS/>
        default:
            return <ControlStageDefault />
    }
};

export default ControlStagesWrapper;