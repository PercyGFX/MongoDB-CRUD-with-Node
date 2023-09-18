import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 min-h-screen">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
