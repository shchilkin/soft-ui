import React, { useReducer } from "react";
import StagesContext from "./StagesContext";
import GenerationReducer from "./StagesReducer";
import {
    CHANGE_STAGE,

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

    return (
        <StagesContext.Provider
            value={{
                stage: state.stage,
                generateDarkMode: state.generateDarkMode,
                generateSecondaryColor: state.generateSecondaryColor,
                changeStage
            }}
        >
            {props.children}
        </StagesContext.Provider>
    );
};

export default StagesState;
