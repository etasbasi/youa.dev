import React from "react";
import ReactDOM from "react-dom";
import "./scss/Base.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("dev"));

serviceWorker.unregister();
