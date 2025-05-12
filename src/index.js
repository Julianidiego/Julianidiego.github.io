import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Renderizar la aplicación React directamente en el div con id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);