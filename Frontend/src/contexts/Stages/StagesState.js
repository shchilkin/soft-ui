import React, { useReducer } from "react";
import StagesContext from "./StagesContext";
import GenerationReducer from "./StagesReducer";
import {
    CHANGE_STAGE,
    CHANGE_GENERATE_DARKMODE,
    CHANGE_GENERATE_SECONDARY_COLOR,
} from "../types";


const StagesState = (props) => {

    const initialState ={
        stage:0,
        generateDarkMode: false,
        generateSecondaryColor: false,
    }

    const [state, dispatch] = useReducer(GenerationReducer, initialState);

    const changeStage = (increaseOrDecrease) => {
        dispatch({
            type: CHANGE_STAGE,
            payload: { increaseOrDecrease },
        });
    };

    const changeGenerateDarkMode = () => {
        dispatch({
            type: CHANGE_GENERATE_DARKMODE,
        });
    }

    const changeGenerateSecondaryColor = () => {
        dispatch({
            type: CHANGE_GENERATE_SECONDARY_COLOR,
        });
    }

    return (
        <StagesContext.Provider
            value={{
                stage: state.stage,
                generateDarkMode: state.generateDarkMode,
                generateSecondaryColor: state.generateSecondaryColor,
                changeStage,
                changeGenerateDarkMode,
                changeGenerateSecondaryColor,
            }}
        >
            {props.children}
        </StagesContext.Provider>
    );
};

export default StagesState;
