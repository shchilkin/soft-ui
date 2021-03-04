import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

export type themeAction = AnyAction;

// export type hexColor = `#${string}`;
export type hexColor = string;

export interface themeState {
  mainColor: hexColor;
  fontColor: hexColor;
  lightShadow: hexColor;
  darkShadow: hexColor;
}

export enum themeActionType {
  UPDATE_MAIN_COLOR = 'UPDATE_MAIN_COLOR',
  UPDATE_FONT_COLOR = 'UPDATE_FONT_COLOR',
  UPDATE_LIGHT_SHADOW = 'UPDATE_LIGHT_SHADOW',
  UPDATE_DARK_SHADOW = 'UPDATE_DARK_SHADOW',
}

const initialState: themeState = {
  mainColor: '#ed2939',
  fontColor: '#fff',
  lightShadow: '#f92b3c',
  darkShadow: '#c92330',
};

export interface Theme {
  mainColor: hexColor;
  fontColor: hexColor;
  lightShadow: hexColor;
  darkShadow: hexColor;
  updateMainColor: (data: Partial<themeState>) => void;
  updateFontColor: (data: Partial<themeState>) => void;
  updateLightShadow: (data: Partial<themeState>) => void;
  updateDarkShadow: (data: Partial<themeState>) => void;
}

/**
 * ### useTheme Hook
 *
 * Contains all data related to the theme:
 * Colors and color handlers
 *
 * */
export const useTheme = (): Theme => {
  const dispatch = useDispatch();

  // TODO: change any to ApplicationState -- useSelector<ApplicationState, boolean>
  const mainColor = useSelector<any, hexColor>((state) => state.themeReducer.mainColor);
  const updateMainColor = (data: Partial<themeState>) => {
    dispatch({
      type: themeActionType.UPDATE_MAIN_COLOR,
      payload: data,
    });
  };

  const fontColor = useSelector<any, hexColor>((state) => state.themeReducer.fontColor);
  const updateFontColor = (data: Partial<themeState>) => {
    dispatch({
      type: themeActionType.UPDATE_FONT_COLOR,
      payload: data,
    });
  };

  const lightShadow = useSelector<any, hexColor>((state) => state.themeReducer.lightShadow);
  const updateLightShadow = (data: Partial<themeState>) => {
    dispatch({
      type: themeActionType.UPDATE_LIGHT_SHADOW,
      payload: data,
    });
  };

  const darkShadow = useSelector<any, hexColor>((state) => state.themeReducer.darkShadow);
  const updateDarkShadow = (data: Partial<themeState>) => {
    dispatch({
      type: themeActionType.UPDATE_DARK_SHADOW,
      payload: data,
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
    updateDarkShadow,
  };
};

const themeReducer = (state = initialState, action: themeAction): themeState => {
  switch (action.type) {
    case themeActionType.UPDATE_MAIN_COLOR:
      return {
        ...state,
        mainColor: action.payload,
      };

    case themeActionType.UPDATE_FONT_COLOR:
      return {
        ...state,
        fontColor: action.payload,
      };

    case themeActionType.UPDATE_LIGHT_SHADOW:
      return {
        ...state,
        lightShadow: action.payload,
      };

    case themeActionType.UPDATE_DARK_SHADOW:
      return {
        ...state,
        darkShadow: action.payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
