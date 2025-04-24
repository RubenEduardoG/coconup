import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.coconup.png" alt="Coconup Logo" />
        
      </div>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><button className="nav-btn" onClick={() => alert("Carrito en construcción")}>🛒 Carrito</button></li>

      </ul>
    </nav>
  );
}

export default Navbar;
