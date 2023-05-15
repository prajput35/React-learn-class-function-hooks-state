import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import MyState from "./MyState";
import { FirstClass } from "./FirstClass";
import MyApp from "./MyApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyState /> */}
    {/* <FirstClass></FirstClass> */}
    <MyApp />
  </React.StrictMode>
);
