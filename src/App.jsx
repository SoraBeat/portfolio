import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/Proyectos" element={<h1>Proyectos</h1>} />
          <Route path="/Contactame" element={<h1>Contactame</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
      <Routes>
        
      </Routes>
    </>
  );
}

export default App;
