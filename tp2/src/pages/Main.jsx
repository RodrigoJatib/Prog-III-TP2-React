import React, { useState } from "react";

function Main({ integrantes, setIntegrantes }) {
  const [nuevoIntegrante, setNuevoIntegrante] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    github: "",
    foto: ""
  });

  const handleChange = (e) => {
    setNuevoIntegrante({
      ...nuevoIntegrante,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIntegrantes([...integrantes, nuevoIntegrante]);
    setNuevoIntegrante({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });
  };

  return (
    <main>
      <h2>Sección Nosotros</h2>
      {integrantes.map((persona, index) => (
        <div key={index}>
          <img src={persona.foto} alt={persona.nombre} width="150" />
          <h3>{persona.nombre} {persona.apellido}</h3>
          <p>Legajo: {persona.legajo}</p>
          <a href={persona.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}

      <h2>Agregar Nuevo Integrante</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={nuevoIntegrante.nombre} onChange={handleChange} required />
        <input type="text" name="apellido" placeholder="Apellido" value={nuevoIntegrante.apellido} onChange={handleChange} required />
        <input type="text" name="legajo" placeholder="Legajo" value={nuevoIntegrante.legajo} onChange={handleChange} required />
        <input type="url" name="github" placeholder="GitHub URL" value={nuevoIntegrante.github} onChange={handleChange} required />
        <input type="url" name="foto" placeholder="Foto URL" value={nuevoIntegrante.foto} onChange={handleChange} required />
        <button type="submit">Agregar Integrante</button>
      </form>
    </main>
  );
}

export default Main;