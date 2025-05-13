import React from 'react';
import './App.css';
import GitHubProfile from './components/GitHubProfile';

function App() {
  // Esta aplicación React se integra con el sitio web existente
  // y se encarga únicamente de renderizar componentes específicos
  // como el perfil de GitHub

  return (
    <div className="react-components">
      {/* Componente de integración con GitHub API */}
      <div className="github-api-section">
        <div className="section-container">
          <h2 className="section-title">Mi Actividad en <span className="accent">GitHub</span></h2>
          <GitHubProfile username="Julianidiego" />
        </div>
      </div>
    </div>
  );
}

export default App;