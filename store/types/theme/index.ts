import { hexColor } from '../../../shared';

export enum themeActionType {
  UPDATE_MAIN_COLOR = 'UPDATE_MAIN_COLOR',
  UPDATE_FONT_COLOR = 'UPDATE_FONT_COLOR',
  UPDATE_LIGHT_SHADOW = 'UPDATE_LIGHT_SHADOW',
  UPDATE_DARK_SHADOW = 'UPDATE_DARK_SHADOW',
}

export interface UpdateFontColorAction {
  type: typeof themeActionType.UPDATE_FONT_COLOR
  payload: hexColor,
}

export interface UpdateMainColorAction {
  type: typeof themeActionType.UPDATE_MAIN_COLOR
  payload: hexColor,
}

export interface UpdateDarkShadowAction {
  type: typeof themeActionType.UPDATE_DARK_SHADOW
  payload: hexColor,
}

export interface UpdateLightShadowAction {
  type: typeof themeActionType.UPDATE_LIGHT_SHADOW
  payload: hexColor,
}

export interface themeState {
  mainColor: hexColor;
  fontColor: hexColor;
  lightShadow: hexColor;
  darkShadow: hexColor;
}

export type themeAction =
  UpdateMainColorAction
  | UpdateFontColorAction
  | UpdateDarkShadowAction
  | UpdateLightShadowAction;

export interface Theme {
  mainColor: hexColor;
  fontColor: hexColor;
  lightShadow: hexColor;
  darkShadow: hexColor;
  updateMainColor: (data: hexColor) => void;
  updateFontColor: (data: hexColor) => void;
  updateLightShadow: (data: hexColor) => void;
  updateDarkShadow: (data: hexColor) => void;
}