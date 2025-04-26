import React, { useState } from "react";

function Main({ integrantes, setIntegrantes }) {
  const [nuevoIntegrante, setNuevoIntegrante] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    github: "",
    foto: ""
  });

  const [mensajeExito, setMensajeExito] = useState("");

  const handleChange = (e) => {
    setNuevoIntegrante({
      ...nuevoIntegrante,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposCompletos = Object.values(nuevoIntegrante).every(valor => valor.trim() !== "");

    if (!camposCompletos) {
      alert("Por favor completá todos los campos.");
      return;
    }

    setIntegrantes([...integrantes, nuevoIntegrante]);
    setNuevoIntegrante({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });
    setMensajeExito("¡Integrante agregado exitosamente!");

    setTimeout(() => setMensajeExito(""), 3000);
  };

  return (
    <main>
      <h2>Sección Nosotros</h2>
      <div className="card-container">
        {integrantes.map((persona, index) => (
          <div className="card" key={index}>
            <img src={persona.foto} alt={persona.nombre} />
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p><strong>Legajo:</strong> {persona.legajo}</p>
            <a href={persona.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>

      <h2>Agregar Nuevo Integrante</h2>
      {mensajeExito && <p style={{ color: "green" }}>{mensajeExito}</p>}

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