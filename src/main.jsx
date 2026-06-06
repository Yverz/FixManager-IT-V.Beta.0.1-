import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { FavoritosProvider } from './context/FavoritosContext';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FavoritosProvider>
      <App />
    </FavoritosProvider>
  </React.StrictMode>
);
