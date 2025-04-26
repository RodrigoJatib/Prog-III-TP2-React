/* Integrantes del grupo:
    Rodrigo Jatib: Legajo Nro: 54911

*/

import React, { useState } from "react";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
//import Main from "../src/components/Main"; (Recordar éste error, ya estaba renderizando automáticamente el Main en /nosotros)
import { Routes, Route } from "react-router-dom";
import NosotrosPages from "../src/pages/NosotrosPages";
import HomePages from "../src/pages/HomePages";
import fotoRodrigo from "../src/assets/profile.jpg";


function App() {
  // Estado que guarda los integrantes del grupo
  const [integrantes, setIntegrantes] = useState([
    {
      nombre: "Rodrigo",
      apellido: "Jatíb",
      legajo: "54911",
      github: "https://github.com/RodrigoJatib",
      foto: fotoRodrigo
    }
  ]);
  return (
    <div className="App">
       <Header />
       <Routes><Route path="/" element={<HomePages />} />
       <Route path="/nosotros" element={<NosotrosPages integrantes={integrantes} setIntegrantes={setIntegrantes}/>} /> </Routes>
      <Footer />
    </div>
  );
}

export default App;
