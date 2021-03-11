export enum softUIPropertiesActionType {
  UPDATE_SHADOW_BLUR = 'UPDATE_SHADOW_BLUR',
  UPDATE_SHADOW_FACTOR = 'UPDATE_SHADOW_FACTOR',
  UPDATE_SHADOW_LENGTH = 'UPDATE_SHADOW_LENGTH',
  UPDATE_PREVIEW_STATE = 'UPDATE_PREVIEW_STATE',
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

export interface SoftUIPropertiesState {
  //TODO: Custom types with documentation
  shadowBlur: number,
  shadowLength: number,
  shadowFactor: number,
  previewState: PreviewState,
}

//TODO: Add documentation
export enum PreviewState {
  Flat,
  Inset,
}

export interface SoftUIProperties {
  shadowBlur: number,
  shadowFactor: number,
  shadowLength: number,
  previewState: PreviewState,
  updateShadowBlur: (data: number) => void,
  updateShadowLength: (data: number) => void,
  updateShadowFactor: (data: number) => void,
  updatePreviewState: (data: PreviewState) => void,
}

export type softUIPropertiesAction = UpdateShadowBlurAction
  | UpdateShadowFactorAction | UpdateShadowLengthAction | UpdatePreviewStateAction;