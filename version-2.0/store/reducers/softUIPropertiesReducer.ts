import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from './index';
import {
  PreviewState,
  SoftUIProperties,
  softUIPropertiesAction,
  softUIPropertiesActionType,
  SoftUIPropertiesState
} from '../types/softUIProperties';

const initialState: SoftUIPropertiesState = {
  shadowBlur: 20,
  shadowFactor: 15,
  shadowLength: 5,
  previewState: PreviewState.Flat
};

//TODO: Add documentation
export const useSoftUIProperties = (): SoftUIProperties => {
  const dispatch = useDispatch();

  const shadowBlur = useSelector<ApplicationState, number>(state => state.softUIPropertiesReducer.shadowBlur);
  const updateShadowBlur = (data: number) => {
    dispatch({
      type: softUIPropertiesActionType.UPDATE_SHADOW_BLUR,
      payload: data
    });
  };

  const previewState = useSelector<ApplicationState, PreviewState>(state => state.softUIPropertiesReducer.previewState);
  const updatePreviewState = (data: PreviewState) => {
    dispatch({
      type: softUIPropertiesActionType.UPDATE_PREVIEW_STATE,
      payload: data
    });
  };

  const shadowLength = useSelector<ApplicationState, number>(state => state.softUIPropertiesReducer.shadowLength);
  const updateShadowLength = (data: number) => {
    dispatch({
      type: softUIPropertiesActionType.UPDATE_SHADOW_LENGTH,
      payload: data
    });
  };

  const shadowFactor = useSelector<ApplicationState, number>(state => state.softUIPropertiesReducer.shadowFactor);
  const updateShadowFactor = (data: number) => {
    dispatch({
      type: softUIPropertiesActionType.UPDATE_SHADOW_FACTOR,
      payload: data
    });
  };

  return {
    shadowBlur,
    shadowFactor,
    shadowLength,
    previewState,
    updateShadowBlur,
    updateShadowFactor,
    updateShadowLength,
    updatePreviewState
  };
};

const softUIPropertiesReducer = (state = initialState, action: softUIPropertiesAction): SoftUIPropertiesState => {
  switch (action.type) {
    case softUIPropertiesActionType.UPDATE_PREVIEW_STATE:
      return {
        ...state,
        previewState: action.payload
      };
    case softUIPropertiesActionType.UPDATE_SHADOW_BLUR:
      return {
        ...state,
        shadowBlur: action.payload
      };
    case softUIPropertiesActionType.UPDATE_SHADOW_FACTOR:
      return {
        ...state,
        shadowFactor: action.payload
      };
    case softUIPropertiesActionType.UPDATE_SHADOW_LENGTH:
      return {
        ...state,
        shadowLength: action.payload
      };
    default:
      return state;
  }
};

export default softUIPropertiesReducer;