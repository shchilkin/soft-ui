export enum softUIPropertiesActionType {
  UPDATE_SHADOW_BLUR = 'UPDATE_SHADOW_BLUR',
  UPDATE_SHADOW_FACTOR = 'UPDATE_SHADOW_FACTOR',
  UPDATE_SHADOW_LENGTH = 'UPDATE_SHADOW_LENGTH',
}

export interface UpdateShadowBlurAction {
  type: typeof softUIPropertiesActionType.UPDATE_SHADOW_BLUR
  payload: number,
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
  shadowBlur: number,
  shadowLength: number,
  shadowFactor: number,
}

export interface SoftUIProperties {
  shadowBlur: number,
  shadowFactor: number,
  shadowLength: number,
  updateShadowBlur: (data: number) => void,
  updateShadowLength: (data: number) => void,
  updateShadowFactor: (data: number) => void,
}

export type softUIPropertiesAction = UpdateShadowBlurAction
  | UpdateShadowFactorAction
  | UpdateShadowLengthAction;
