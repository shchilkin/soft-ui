import { HexColor } from '../../../shared';

export enum themeActionType {
  UPDATE_MAIN_COLOR = 'UPDATE_MAIN_COLOR',
  UPDATE_FONT_COLOR = 'UPDATE_FONT_COLOR',
  UPDATE_LIGHT_SHADOW = 'UPDATE_LIGHT_SHADOW',
  UPDATE_DARK_SHADOW = 'UPDATE_DARK_SHADOW',
}

export interface UpdateFontColorAction {
  type: typeof themeActionType.UPDATE_FONT_COLOR
  payload: HexColor,
}

export interface UpdateMainColorAction {
  type: typeof themeActionType.UPDATE_MAIN_COLOR
  payload: HexColor,
}

export interface UpdateDarkShadowAction {
  type: typeof themeActionType.UPDATE_DARK_SHADOW
  payload: HexColor,
}

export interface UpdateLightShadowAction {
  type: typeof themeActionType.UPDATE_LIGHT_SHADOW
  payload: HexColor,
}

export interface themeState {
  mainColor: HexColor;
  fontColor: HexColor;
  lightShadow: HexColor;
  darkShadow: HexColor;
}

export type themeAction =
  UpdateMainColorAction
  | UpdateFontColorAction
  | UpdateDarkShadowAction
  | UpdateLightShadowAction;

export interface Theme {
  mainColor: HexColor;
  fontColor: HexColor;
  lightShadow: HexColor;
  darkShadow: HexColor;
  updateMainColor: (data: HexColor) => void;
  updateFontColor: (data: HexColor) => void;
  updateLightShadow: (data: HexColor) => void;
  updateDarkShadow: (data: HexColor) => void;
}