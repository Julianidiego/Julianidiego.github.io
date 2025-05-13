import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    try {
      // Crear root de React y renderizar la aplicación
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("Aplicación React montada correctamente");
    } catch (error) {
      console.error("Error al montar la aplicación React:", error);
    }
  } else {
    console.warn("No se encontró el elemento 'root' para montar React");
  }
});