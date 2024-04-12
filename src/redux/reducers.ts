import {combineReducers} from 'redux';
import {mainReducer} from '../features/Main/reducer/mainReducer';

const rootReducers = combineReducers({
  mainReducer: mainReducer,
});

export default rootReducers;
