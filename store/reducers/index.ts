import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  themeReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
