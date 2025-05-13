import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  // Función para determinar el color del lenguaje
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      C: '#555555',
      'C++': '#f34b7d',
      'C#': '#178600',
      Ruby: '#701516',
      Go: '#00ADD8',
      PHP: '#4F5D95',
      Shell: '#89e051',
    };
    
    return colors[language] || '#8b949e';
  };

  return (
    <div className="github-profile">
      <div className="github-profile-header">
        <img 
          src={profile.avatar_url} 
          alt={`${username}'s avatar`} 
          className="github-avatar" 
        />
        <div className="github-info">
          <h3 className="github-name">{profile.name || username}</h3>
          <div className="github-username">@{profile.login}</div>
          <p className="github-bio">{profile.bio || 'No hay biografía disponible'}</p>
        </div>
      </div>
      
      <div className="github-stats">
        <div className="github-stat">
          <div className="stat-value">{profile.followers}</div>
          <div className="stat-label">Seguidores</div>
        </div>
        <div className="github-stat">
          <div className="stat-value">{profile.following}</div>
          <div className="stat-label">Siguiendo</div>
        </div>
        <div className="github-stat">
          <div className="stat-value">{profile.public_repos}</div>
          <div className="stat-label">Repositorios</div>
        </div>
        {profile.location && (
          <div className="github-stat">
            <div className="stat-value"><i className="fas fa-map-marker-alt"></i></div>
            <div className="stat-label">{profile.location}</div>
          </div>
        )}
      </div>
      
      <div className="github-repos">
        <h3>Repositorios Recientes</h3>
        {repos.length === 0 ? (
          <p>No hay repositorios disponibles.</p>
        ) : (
          <div className="repo-list">
            {repos.map(repo => (
              <div key={repo.id} className="repo-item">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repo-name"
                >
                  {repo.name}
                </a>
                <p className="repo-description">{repo.description || 'Sin descripción'}</p>
                <div className="repo-meta">
                  {repo.language && (
                    <div className="repo-language">
                      <span 
                        className="language-color" 
                        style={{backgroundColor: getLanguageColor(repo.language)}}
                      ></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div>
                    <span title="Stars"><i className="far fa-star"></i> {repo.stargazers_count}</span>
                    <span title="Forks" style={{marginLeft: '1rem'}}><i className="fas fa-code-branch"></i> {repo.forks_count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <a 
        href={`https://github.com/${username}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="github-view-profile"
      >
        Ver perfil completo en GitHub
      </a>
    </div>
  );
};

export default GitHubProfile;