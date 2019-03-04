import postReducer from "./postReducer";
import authorReducer from "./authorReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  post: postReducer,
  author: authorReducer,
  auth: authReducer,
  firestore: firestoreReducer
});

export default rootReducer;
