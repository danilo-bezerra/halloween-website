import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";

import { Routes } from "./routes/index.routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
