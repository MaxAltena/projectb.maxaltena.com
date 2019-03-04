import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import MajorLoading from "./components/common/MajorLoading";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(<MajorLoading />, document.getElementById("root"));

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

serviceWorker.unregister();
