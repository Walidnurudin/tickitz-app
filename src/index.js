import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/assets/css/main.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/styles.css";

// mode ketat
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
