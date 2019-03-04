import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "../config/fbConfig";

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

export default store;
