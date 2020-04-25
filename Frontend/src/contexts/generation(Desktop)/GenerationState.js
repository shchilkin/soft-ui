import React, { useReducer } from "react";
import GenerationContext from "./GenerationContext";
import GenerationReducer from "./GenerationReducer";
import {
    CHANGE_STAGE,

} from "../types";


const GenerationState = (props) => {

    const initialState ={
        stage:0
    }

    const [state, dispatch] = useReducer(GenerationReducer, initialState);

    const changeStage = (increaseOrDecrease) => {
        dispatch({
            type: CHANGE_STAGE,
            payload: { increaseOrDecrease },
        });
    };

    return (
        <GenerationContext.Provider
            value={{
                stage: initialState.stage,
                changeStage
            }}
        >
            {props.children}
        </GenerationContext.Provider>
    );
};

export default GenerationState;
