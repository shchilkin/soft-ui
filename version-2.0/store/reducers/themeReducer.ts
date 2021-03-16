import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from './index';
import { hexColor } from '../../shared';
import { Theme, themeAction, themeActionType, themeState } from '../types/theme';

const initialState: themeState = {
  mainColor: '#FAFAFA',
  fontColor: '#000',
  lightShadow: '#FFFFFF',
  darkShadow: '#DADADA'
};

//TODO: Rename to color reducer
/**
 * ### useTheme Hook
 *
 * Contains all data related to the theme:
 * Colors and color handlers
 *
 * @return {string} - mainColor, fontColor, lightShadow, darkShadow and their handlers
 * */
export const useTheme = (): Theme => {
  const dispatch = useDispatch();

  const mainColor = useSelector<ApplicationState, hexColor>((state) => state.themeReducer.mainColor);
  const updateMainColor = (data: hexColor) => {
    dispatch({
      type: themeActionType.UPDATE_MAIN_COLOR,
      payload: data
    });
  };

  const fontColor = useSelector<ApplicationState, hexColor>((state) => state.themeReducer.fontColor);
  const updateFontColor = (data: hexColor) => {
    dispatch({
      type: themeActionType.UPDATE_FONT_COLOR,
      payload: data
    });
  };

  const lightShadow = useSelector<ApplicationState, hexColor>((state) => state.themeReducer.lightShadow);
  const updateLightShadow = (data: hexColor) => {
    dispatch({
      type: themeActionType.UPDATE_LIGHT_SHADOW,
      payload: data
    });
  };

  const darkShadow = useSelector<ApplicationState, hexColor>((state) => state.themeReducer.darkShadow);
  const updateDarkShadow = (data: hexColor) => {
    dispatch({
      type: themeActionType.UPDATE_DARK_SHADOW,
      payload: data
    });
  };

  return {
    mainColor,
    fontColor,
    lightShadow,
    darkShadow,
    updateMainColor,
    updateFontColor,
    updateLightShadow,
    updateDarkShadow
  };
};

const themeReducer = (state = initialState, action: themeAction): themeState => {
  switch (action.type) {
    case themeActionType.UPDATE_MAIN_COLOR:
      return {
        ...state,
        mainColor: action.payload
      };

    case themeActionType.UPDATE_FONT_COLOR:
      return {
        ...state,
        fontColor: action.payload
      };

    case themeActionType.UPDATE_LIGHT_SHADOW:
      return {
        ...state,
        lightShadow: action.payload
      };

    case themeActionType.UPDATE_DARK_SHADOW:
      return {
        ...state,
        darkShadow: action.payload
      };

    default:
      return state;
  }
};

export default themeReducer;