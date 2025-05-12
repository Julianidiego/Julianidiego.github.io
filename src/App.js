import React from 'react';
import './App.css';
import LenguajesCard from './components/LenguajesCard';
import GitHubProfile from './components/GitHubProfile';

function App() {
  const lenguajes = [
    {
      nombre: "Python",
      logo: "/images/logos/python-logo.png",
      nivel: 4.5,
      descripcion: "Data Science, Web, Automatización",
    },
    {
      nombre: "Delphi",
      logo: "/images/logos/delphi-logo.png",
      nivel: 4,
      descripcion: "Aplicaciones de escritorio, DB",
    },
    {
      nombre: "SQL",
      logo: "/images/logos/sql-logo.png",
      nivel: 5,
      descripcion: "PostgreSQL, MySQL, SQLite",
    },
    {
      nombre: "C#",
      logo: "/images/logos/csharp-logo.png",
      nivel: 3.5,
      descripcion: ".NET, Unity, Aplicaciones escritorio",
    },
    {
      nombre: "C++",
      logo: "/images/logos/cpp-logo.png",
      nivel: 3,
      descripcion: "Programación de bajo nivel, Consola",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Diego Hernán Juliani</h1>
        <h2>Desarrollador de Software y Científico de Datos</h2>
      </header>
      
      {/* Integración con GitHub API para el Developer Program */}
      <div className="github-container">
        <GitHubProfile username="Julianidiego" />
      </div>
      
      <div className="lenguajes-container">
        <h2>Lenguajes de Programación</h2>
        {lenguajes.map((lenguaje, index) => (
          <LenguajesCard key={index} lenguaje={lenguaje} />
        ))}
      </div>

      <footer className="App-footer">
        <p>© 2025 Diego Hernán Juliani. Todos los derechos reservados.</p>
        <p>Sitio desarrollado con React - Integrado con GitHub API</p>
      </footer>
    </div>
  );
}

export default App;