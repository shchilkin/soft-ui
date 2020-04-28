import React, { useReducer } from "react";
import ColorShowcaseContext from "./ColorShowcaseContext";
import GenerationReducer from "./ColorShowcaseReducer";
import {
    CHANGE_COLOR, CHANGE_SHOWCASE_COLOR,
    CHANGE_STAGE,

} from "../types";


const ColorShowcaseState = (props) => {

    const initialState ={
        backgroundColor: '#ED2939',
    }

    initialState.inputValue = initialState.backgroundColor;

    const [state, dispatch] = useReducer(GenerationReducer, initialState);

    const changeShowcaseColor = (newColor) => {
        dispatch({
            type: CHANGE_SHOWCASE_COLOR,
            payload: { newColor },
        });
    };

    return (
        <ColorShowcaseContext.Provider
            value={{
                backgroundColor: state.backgroundColor,
                inputValue: state.inputValue,
                changeShowcaseColor
            }}
        >
            {props.children}
        </ColorShowcaseContext.Provider>
    );
};

export default ColorShowcaseState;
