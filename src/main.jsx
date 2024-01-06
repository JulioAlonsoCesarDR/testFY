import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import StateCharacters from "./context/CharactersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StateCharacters>
        <App />
      </StateCharacters>
    </Provider>
  </React.StrictMode>
);
