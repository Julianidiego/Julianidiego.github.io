import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  // Buscar el contenedor donde queremos renderizar React
  const lenguajesSection = document.getElementById('lenguajes');
  
  if (lenguajesSection) {
    // Crear un contenedor para la app de React dentro de la sección existente
    const reactContainer = document.createElement('div');
    reactContainer.id = 'react-lenguajes-container';
    
    // Reemplazar el contenido existente de la sección de lenguajes
    const lenguajesContainer = lenguajesSection.querySelector('.lenguajes-container');
    if (lenguajesContainer) {
      lenguajesContainer.replaceWith(reactContainer);
    } else {
      // Si no existe un contenedor previo, agregar el nuevo después del título
      const title = lenguajesSection.querySelector('h2');
      if (title) {
        title.after(reactContainer);
      } else {
        lenguajesSection.appendChild(reactContainer);
      }
    }
    
    // Renderizar la aplicación React en el contenedor creado
    const root = ReactDOM.createRoot(document.getElementById('react-lenguajes-container'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});