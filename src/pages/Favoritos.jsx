import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';

export default function Favoritos() {
  const { favoritos, eliminar } = useFavoritos();

  if (favoritos.length === 0) {
    return (
      <section>
        <h2>Favoritos</h2>
        <p>No hay servicios favoritos todavía.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Favoritos</h2>
      <div className="grid">
        {favoritos.map((f) => (
          <article className="card" key={f.id}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
            <div className="card-actions">
              <strong>${f.price}</strong>
              <button onClick={() => eliminar(f.id)}>Eliminar</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
