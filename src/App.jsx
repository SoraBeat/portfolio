import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Contactme from "./Components/Contactme/Contactme";

function App() {
  let location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SobreMI" element={<AboutMe />} />
          <Route path="Proyectos" element={<h1>Proyectos</h1>} />
          <Route path="Contactame" element={<Contactme />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Routes></Routes>
    </>
  );
}

export default App;
