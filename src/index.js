import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader/Loader";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
