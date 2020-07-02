import { combineReducers } from "redux";
// import auth from './reducers/auth';
import handler from './reducers/handler';

const rootReducer = combineReducers({
  handler
});

export default rootReducer;