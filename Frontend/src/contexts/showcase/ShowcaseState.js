import React, { useReducer } from "react";
import ShowcaseContext from "./ShowcaseContext";
import GenerationReducer from "./ShowcaseReducer";
import {
    CHANGE_SHOWCASE_COLOR,
    CHANGE_DARK_MODE_SHOWCASE_COLOR
} from "../types";


const ShowcaseState = (props) => {

    const initialState ={
        //backgroundColor stands for colors showcase card
        //TODO rename backgroundColor to something more appropriate
        backgroundColor: '#ED2939',
        darkModeBackground: '#666666'
    }

    initialState.inputValue = initialState.backgroundColor;

    const [state, dispatch] = useReducer(GenerationReducer, initialState);

    const changeShowcaseColor = (newColor) => {
        dispatch({
            type: CHANGE_SHOWCASE_COLOR,
            payload: { newColor },
        });
    };

    const changeDarkModeColor = (newColor) => {
        dispatch({
            type: CHANGE_DARK_MODE_SHOWCASE_COLOR,
            payload: { newColor },
        });
    };

    return (
        <ShowcaseContext.Provider
            value={{
                backgroundColor: state.backgroundColor,
                inputValue: state.inputValue,
                darkModeBackground: state.darkModeBackground,
                changeShowcaseColor,
                changeDarkModeColor
            }}
        >
            {props.children}
        </ShowcaseContext.Provider>
    );
};

export default ShowcaseState;
