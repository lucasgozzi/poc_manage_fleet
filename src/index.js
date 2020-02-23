import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";

import { store, persistor } from "./store";

ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <App />
    </Provider>), document.getElementById("root"));
