export enum softUIPropertiesActionType {
  UPDATE_SHADOW_BLUR = 'UPDATE_SHADOW_BLUR',
  UPDATE_SHADOW_FACTOR = 'UPDATE_SHADOW_FACTOR',
  UPDATE_SHADOW_LENGTH = 'UPDATE_SHADOW_LENGTH',
  UPDATE_PREVIEW_STATE = 'UPDATE_PREVIEW_STATE',
  UPDATE_FONT_COLOR_TYPE = 'UPDATE_FONT_COLOR_TYPE'
}

export interface UpdateShadowBlurAction {
  type: typeof softUIPropertiesActionType.UPDATE_SHADOW_BLUR
  payload: number,
}

export interface UpdatePreviewStateAction {
  type: typeof softUIPropertiesActionType.UPDATE_PREVIEW_STATE
  payload: PreviewState,
}

export interface UpdateShadowLengthAction {
  type: typeof softUIPropertiesActionType.UPDATE_SHADOW_LENGTH
  payload: number,
}

export interface UpdateShadowFactorAction {
  type: typeof softUIPropertiesActionType.UPDATE_SHADOW_FACTOR
  payload: number,
}

export interface UpdateFontColorTypeStaterAction {
  type: typeof softUIPropertiesActionType.UPDATE_FONT_COLOR_TYPE
  payload: FontColorTypeState,
}


export interface SoftUIPropertiesState {
  //TODO: Custom types with documentation
  shadowBlur: number,
  shadowLength: number,
  shadowFactor: number,
  previewState: PreviewState,
  fontColorTypeState: FontColorTypeState
}

//TODO: Add documentation
export enum PreviewState {
  Flat,
  Inset,
}

//TODO: Add documentation
export enum FontColorTypeState {
  PureBlackOrWhite,
  TintOrShadeOfMainColor
}

export interface SoftUIProperties {
  shadowBlur: number,
  shadowFactor: number,
  shadowLength: number,
  previewState: PreviewState,
  fontColorTypeState: FontColorTypeState,
  updateShadowBlur: (data: number) => void,
  updateShadowLength: (data: number) => void,
  updateShadowFactor: (data: number) => void,
  updatePreviewState: (data: PreviewState) => void,
  updateFontColorTypeState: (data: FontColorTypeState) => void,
}

export type softUIPropertiesAction = UpdateShadowBlurAction
  | UpdateShadowFactorAction | UpdateShadowLengthAction
  | UpdatePreviewStateAction | UpdateFontColorTypeStaterAction;