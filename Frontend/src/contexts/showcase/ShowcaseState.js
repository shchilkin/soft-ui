import React, { useReducer } from "react";
import ShowcaseContext from "./ShowcaseContext";
import ShowcaseReducer from "./ShowcaseReducer";
import {
    CHANGE_SHOWCASE_COLOR,
    CHANGE_DARK_MODE_SHOWCASE_COLOR,
    CHANGE_SECONDARY_COLOR } from "../types";
import { calculateColors } from "../../Functions";
import { getTintsAndShades, hexToRGB } from '@soft-ui-generator/color-processing-library';


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

    initialState.secondaryColor = calculateColors(initialState.backgroundColor);

    const {Red, Green, Blue} = hexToRGB(initialState.secondaryColor)

    initialState.secondaryColorDarkShadow = getTintsAndShades(Red,Green,Blue, 85);
    initialState.secondaryColorLightShadow = getTintsAndShades(Red,Green,Blue, 105);

    initialState.inputValue = initialState.backgroundColor;

    const [state, dispatch] = useReducer(ShowcaseReducer, initialState);

    const changeShowcaseColor = (newShowcaseColor, lightShadow, darkShadow) => {
        dispatch({
            type: CHANGE_SHOWCASE_COLOR,
            payload: { newColor: newShowcaseColor, lightShadow: lightShadow, darkShadow: darkShadow },
        });
    };

    const changeSecondaryColor = (newSecondaryColor, lightShadow, darkShadow) => {
        dispatch({
            type: CHANGE_SECONDARY_COLOR,
            payload: { newColor: newSecondaryColor, lightShadow: lightShadow, darkShadow: darkShadow },
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
                secondaryColor: state.secondaryColor,
                backgroundColor: state.backgroundColor,
                showcaseDarkShadow: state.showcaseDarkShadow,
                showcaseLightShadow: state.showcaseLightShadow,
                darkModeFont: state.darkModeFont,
                darkModeFactor: state.darkModeFactor,
                darkModeBackground: state.darkModeBackground,
                secondaryColorDarkShadow: state.secondaryColorDarkShadow,
                secondaryColorLightShadow: state.secondaryColorLightShadow,
                darkModeBackgroundDarkShadow: state.darkModeBackgroundDarkShadow,
                darkModeBackgroundLightShadow: state.darkModeBackgroundLightShadow,
                changeShowcaseColor,
                changeSecondaryColor,
                changeDarkModeFactor
            }}
        >
            {props.children}
        </ShowcaseContext.Provider>
    );
};

export default ShowcaseState;
