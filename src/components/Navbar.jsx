import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

export default function Navbar() {
  const { favoritos } = useFavoritos();

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="nav">
      <div className="nav-brand">Mi SPA</div>
      <nav className="nav-links">
        <NavLink to="/" className={linkClass} end>
          Inicio
        </NavLink>
        <NavLink to="/catalogo" className={linkClass}>
          Catálogo
        </NavLink>
        <NavLink to="/favoritos" className={linkClass}>
          Favoritos <span className="badge">{favoritos.length}</span>
        </NavLink>
      </nav>
    </header>
  );
}
