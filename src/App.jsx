import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import backgroundWave from "./Assets/Images/wave.png";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<h1>Sobre Mi</h1>} />
          <Route path="/Proyectos" element={<h1>Proyectos</h1>} />
          <Route path="/Contactame" element={<h1>Contactame</h1>} />
        </Routes>
        <img
          className="absolute w-full h-full object-cover bottom-0 -z-10 bg-right"
          src={backgroundWave}
          alt="foto olas"
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
