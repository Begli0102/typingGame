import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WordProvider from "./context/wordContext";

ReactDOM.render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
