import authReducer from './authReducer';
import projectReducer from './projectReducer';
const { combineReducers } = require("redux");


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;