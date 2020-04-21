import React, { useReducer } from "react";
import ThemeContext from "./ThemeContext";
import ThemeReducer from "./ThemeReducer";
import {
  CHANGE_COLOR,
  CHANGE_THEME,
  CHANGE_SHADOW_BLUR,
  CHANGE_BORDER_RADIUS,
  CHANGE_SHADOW_LENGTH,
  CHANGE_DARK_SHADOW_FACTOR,
  CHANGE_LIGHT_SHADOW_FACTOR,
  INVERSE_FONT,
  THEME_RESET
} from "../types";
import {
  calculateShadows,
  fontColor,
  toHex,
} from "../../Components/Generator/Functions.SoftUIGenerator";

const ThemeState = (props) => {
  //Darkmode related code
  // TODO Rename variable from
  //  getThemeStateFromLocalStorage
  //  to
  //  SetInitialTheme
  const getThemeStateFromLocalStorage = () => {
    let state = JSON.parse(localStorage.getItem("theme"));
    if (state === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.body.style = "background: #121212;";
        // Use Dark mode scheme
        return true;
      } else {
        document.body.style = "background: #F0F0F0;";
        // Use Default (lightmode) mode scheme
        return false;
      }
    } else {
      if (state) {
        document.body.style = "background: #F0F0F0;";
      } else if (!state) {
        document.body.style = "background: #121212;";
      }
      return state;
    }
  };

  // TODO Delete or rewrite when problem with background (color mismatch) fixed
  const changeBackground = () => {
    const state = JSON.parse(localStorage.getItem("theme"));
    if (state === null) {
      document.body.style = "background: #F0F0F0;";
    } else {
      if (state) {
        document.body.style = "background: #121212;";
      } else if (!state) {
        document.body.style = "background: #F0F0F0;";
      }
    }
  };

  //SoftUI generator related code

  const initialState = {
    darkMode: getThemeStateFromLocalStorage(),
    Red: 173,
    Green: 0,
    Blue: 62,
    shadowBlur: 30,
    shadowLength: 5,
    borderRadius: 12,
    darkShadowFactor: 0.85,
    lightShadowFactor: 1.05,
    codeBackgroundColor: "#930035",
  };

  //  Calculate hexadecimal value of the color
  initialState.hexColor =
    toHex(initialState.Red) +
    toHex(initialState.Green) +
    toHex(initialState.Blue);

  //  Calculate contrast font color for background
  initialState.font = fontColor(
    initialState.Red,
    initialState.Green,
    initialState.Blue
  );

  initialState.codeFontColor = fontColor(
    initialState.Red,
    initialState.Green,
    initialState.Blue
  );

  // Calculate shadows
  initialState.shadows = calculateShadows(
    initialState.Red,
    initialState.Green,
    initialState.Blue,
    initialState.lightShadowFactor,
    initialState.darkShadowFactor
  );

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  //  Change theme | Dark mode
  const changeTheme = () => {
    dispatch({
      type: CHANGE_THEME,
      payload: initialState.darkMode,
    });
  };

  const changeColor = (colorName, colorValue) => {
    dispatch({
      type: CHANGE_COLOR,
      payload: { colorName, colorValue },
    });
  };

  const resetTheme = () => {
    dispatch({
      type: THEME_RESET,
    });
  }

  const inverseFont = () => {
    dispatch({
      type: INVERSE_FONT
    });
  };

  const changeShadowBlur = (blurValue) => {
    dispatch({
      type: CHANGE_SHADOW_BLUR,
      payload: blurValue,
    });
  };

  const changeBorderRadius = (borderRadius) => {
    dispatch({
      type: CHANGE_BORDER_RADIUS,
      payload: borderRadius,
    });
  };

  const changeShadowLength = (shadowLength) => {
    dispatch({
      type: CHANGE_SHADOW_LENGTH,
      payload: shadowLength,
    });
  };

  const changeDarkShadowFactor = (darkShadowFactor) => {
    dispatch({
      type: CHANGE_DARK_SHADOW_FACTOR,
      payload: darkShadowFactor,
    });
  };

  const changeLightShadowFactor = (lightShadowFactor) => {
    dispatch({
      type: CHANGE_LIGHT_SHADOW_FACTOR,
      payload: lightShadowFactor,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        resetTheme,
        inverseFont,
        changeTheme,
        changeColor,
        changeBackground,
        changeShadowBlur,
        changeBorderRadius,
        changeShadowLength,
        changeDarkShadowFactor,
        changeLightShadowFactor,
        font: state.font,
        shadows: state.shadows,
        colorRGB: {
          Red: state.Red,
          Green: state.Green,
          Blue: state.Blue,
        },
        colorHEX: state.hexColor,
        darkMode: state.darkMode,
        shadowBlur: state.shadowBlur,
        codeFontColor: state.codeFontColor,
        shadowLength: state.shadowLength,
        borderRadius: state.borderRadius,
        darkShadowFactor: state.darkShadowFactor,
        lightShadowFactor: state.lightShadowFactor,
        codeBackgroundColor: state.codeBackgroundColor,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
