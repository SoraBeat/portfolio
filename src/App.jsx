import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/SobreMi" element={<h1>Sobre Mi</h1>} />
        <Route path="/Proyectos" element={<h1>Proyectos</h1>} />
        <Route path="/Contactame" element={<h1>Contactame</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
