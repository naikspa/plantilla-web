import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img className="logo" src="/hurling.jpg" alt="Logo" />
      <button className="abrir-menu" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </button>
      <nav className={isMenuOpen ? 'nav visible' : 'nav'}>
        <button className="cerrar-menu" onClick={toggleMenu}>
          <i className="bi bi-x"></i>
        </button>
        <ul className="nav-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Quiénes somos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Qué hacemos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
