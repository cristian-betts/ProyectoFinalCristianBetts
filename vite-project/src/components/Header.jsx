import { useState } from "react";

function Header() {
  // Estado que controla la apertura/cierre del menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);

  // Función que alterna el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Título principal */}
      <h1 className="logo">GameTracker</h1>

      {/* Botón menú hamburguesa */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menú de navegación */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/reseñas">Reseñas</Link>
          <Link to="/añadir-juego">Añadir Juego</Link>
          <Link to="/añadir-reseña">Añadir Reseña</Link>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
