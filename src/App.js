import React from 'react';
import './App.css';
import GitHubProfile from './components/GitHubProfile';

function App() {
  // Esta aplicación React se enfocará únicamente en renderizar componentes específicos
  // que se integran con el sitio web existente, en lugar de reemplazar toda la página

  return (
    <div className="react-components">
      {/* Componente de integración con GitHub API */}
      <div className="github-api-container">
        <h2>Mi Perfil de GitHub</h2>
        <GitHubProfile username="Julianidiego" />
      </div>
    </div>
  );
}

export default App;