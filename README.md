# Julianidiego Portfolio

Sitio web personal que muestra mi perfil profesional como desarrollador de software y científico de datos, con integración de la API de GitHub.

## Integración con GitHub API

Este proyecto utiliza la API de GitHub para mostrar datos dinámicos de mi perfil y repositorios como parte del GitHub Developer Program. La integración incluye:

- Visualización de datos de perfil (avatar, nombre, biografía)
- Estadísticas de GitHub (seguidores, siguiendo, repositorios)
- Listado de repositorios recientes con información detallada
- Enlaces directos a los repositorios y al perfil completo

### Tecnologías utilizadas

- React.js para la interfaz de usuario
- Axios para las peticiones HTTP a la API de GitHub
- CSS moderno para el diseño responsive
- GitHub Pages para el alojamiento

### Estructura del componente

El componente principal `GitHubProfile` realiza dos llamadas a la API:
1. `https://api.github.com/users/{username}` - Para obtener datos del perfil
2. `https://api.github.com/users/{username}/repos` - Para obtener la lista de repositorios

### Cómo funciona

El componente realiza peticiones a la API pública de GitHub y presenta los datos de manera visualmente atractiva, similar a la interfaz de GitHub. Incluye manejo de estados de carga y posibles errores en la comunicación con la API.

```javascript
// Ejemplo de cómo se obtienen los datos
useEffect(() => {
  const fetchGitHubData = async () => {
    try {
      // Obtener datos del perfil
      const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
      
      // Obtener repositorios
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
      
      setProfile(profileResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setError('Error al obtener datos de GitHub: ' + err.message);
    }
  };

  fetchGitHubData();
}, [username]);
```

## Beneficios como miembro del GitHub Developer Program

Como miembro del GitHub Developer Program, este proyecto aprovecha:

- Acceso a la API pública de GitHub
- Posibilidad de aumentar los límites de tasa para aplicaciones con mayor uso
- Acceso a recursos para desarrolladores y documentación avanzada
- Soporte de la comunidad de desarrolladores de GitHub

## Próximas Mejoras

- Implementar autenticación OAuth para aumentar los límites de tasa
- Añadir visualización de gráficos de contribuciones
- Incluir búsqueda de repositorios específicos
- Mostrar información sobre issues y pull requests activos

## Contacto

Para más información sobre esta integración, puedes contactarme directamente a través de mi perfil de GitHub [@Julianidiego](https://github.com/Julianidiego).
