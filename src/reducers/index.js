import { combineReducers } from 'redux';

import TestReducer from './testReducer'

const rootReducer = combineReducers({
   test: TestReducer
});

export default rootReducer;