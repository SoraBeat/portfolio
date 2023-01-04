import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AnimatePresence>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AnimatePresence>
  </React.StrictMode>
);

reportWebVitals();
