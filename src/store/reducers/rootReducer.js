import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
const { combineReducers } = require("redux");


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer;
