import React, { useReducer } from "react";
import ShowcaseContext from "./ShowcaseContext";
import ShowcaseReducer from "./ShowcaseReducer";
import {
    CHANGE_SHOWCASE_COLOR,
    CHANGE_DARK_MODE_SHOWCASE_COLOR
} from "../types";


const ShowcaseState = (props) => {

    const initialState ={
        //backgroundColor stands for colors showcase card
        //TODO rename backgroundColor to something more appropriate
        backgroundColor: '#ec3569',
        showcaseDarkShadow:'#C92D59',
        darkModeFactor:40,
        showcaseLightShadow:'#F8386E',
        darkModeBackground: '#5E152A',
        darkModeBackgroundDarkShadow:'#501224',
        darkModeFont:'#FFF',
        darkModeBackgroundLightShadow:'#591428',
    }

    initialState.inputValue = initialState.backgroundColor;

    const [state, dispatch] = useReducer(ShowcaseReducer, initialState);

    const changeShowcaseColor = (newShowcaseColor, lightShadow, darkShadow) => {
        console.log('color, shadows',{ newColor: newShowcaseColor, lightShadow: lightShadow, darkShadow: darkShadow })
        dispatch({
            type: CHANGE_SHOWCASE_COLOR,
            payload: { newColor: newShowcaseColor, lightShadow: lightShadow, darkShadow: darkShadow },
        });
    };

    const changeDarkModeFactor = (newFactor) => {
        dispatch({
            type: CHANGE_DARK_MODE_SHOWCASE_COLOR,
            payload: { newFactor },
        });
    };

    return (
        <ShowcaseContext.Provider
            value={{
                inputValue: state.inputValue,
                backgroundColor: state.backgroundColor,
                showcaseDarkShadow: state.showcaseDarkShadow,
                showcaseLightShadow: state.showcaseLightShadow,
                darkModeFont: state.darkModeFont,
                darkModeFactor: state.darkModeFactor,
                darkModeBackground: state.darkModeBackground,
                darkModeBackgroundDarkShadow: state.darkModeBackgroundDarkShadow,
                darkModeBackgroundLightShadow: state.darkModeBackgroundLightShadow,
                changeShowcaseColor,
                changeDarkModeFactor
            }}
        >
            {props.children}
        </ShowcaseContext.Provider>
    );
};

export default ShowcaseState;
