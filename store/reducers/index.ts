import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import softUIPropertiesReducer from './softUIPropertiesReducer';

const rootReducer = combineReducers({
  themeReducer,
  softUIPropertiesReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
