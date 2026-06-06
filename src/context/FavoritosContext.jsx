import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext(null);

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const agregar = (item) => {
    setFavoritos((prev) => {
      if (prev.find((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const eliminar = (id) => {
    setFavoritos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregar, eliminar }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext);
  if (!ctx) throw new Error('useFavoritos debe usarse dentro de FavoritosProvider');
  return ctx;
}

export default FavoritosContext;
