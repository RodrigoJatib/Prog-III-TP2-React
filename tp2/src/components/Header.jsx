import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Presentación</h1>
      <nav>
      <Link to="/">Inicio</Link> | <Link to="/nosotros">Nosotros</Link>
      </nav>
    </header>
  );
}

export default Header;