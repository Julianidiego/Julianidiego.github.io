import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHubProfile.css';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Obtener datos del perfil
        const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
        
        // Obtener repositorios
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        
        setProfile(profileResponse.data);
        setRepos(reposResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener datos de GitHub: ' + err.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) return <div className="github-loading">Cargando datos de GitHub...</div>;
  if (error) return <div className="github-error">{error}</div>;

  return (
    <div className="github-profile">
      <h2>Mi Perfil de GitHub</h2>
      
      <div className="github-profile-header">
        <img 
          src={profile.avatar_url} 
          alt={`${username}'s avatar`} 
          className="github-avatar" 
        />
        <div className="github-profile-info">
          <h3>{profile.name || username}</h3>
          <p className="github-bio">{profile.bio || 'No bio available'}</p>
          <div className="github-stats">
            <div className="github-stat">
              <span className="github-stat-value">{profile.followers}</span>
              <span className="github-stat-label">Seguidores</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{profile.following}</span>
              <span className="github-stat-label">Siguiendo</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{profile.public_repos}</span>
              <span className="github-stat-label">Repos</span>
            </div>
          </div>
          <a 
            href={profile.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            Ver Perfil Completo
          </a>
        </div>
      </div>
      
      <div className="github-repos">
        <h3>Repositorios Recientes</h3>
        {repos.length === 0 ? (
          <p>No hay repositorios disponibles.</p>
        ) : (
          <ul className="github-repos-list">
            {repos.map(repo => (
              <li key={repo.id} className="github-repo">
                <h4>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description || 'Sin descripción'}</p>
                <div className="github-repo-stats">
                  <span className="github-repo-stat">
                    <span className="github-repo-stat-icon">★</span> {repo.stargazers_count}
                  </span>
                  <span className="github-repo-stat">
                    <span className="github-repo-stat-icon">🍴</span> {repo.forks_count}
                  </span>
                  <span className="github-repo-language">{repo.language || 'No language'}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="github-footer">
        <p>Este componente utiliza la API pública de GitHub, demostrando la integración con GitHub para formar parte del GitHub Developer Program.</p>
      </div>
    </div>
  );
};

export default GitHubProfile;