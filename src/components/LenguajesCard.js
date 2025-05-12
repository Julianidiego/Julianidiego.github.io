import React, { useState } from 'react';
import './LenguajesCard.css';

const LenguajesCard = ({ lenguaje }) => {
  const [flipped, setFlipped] = useState(false);
  
  const renderStars = (nivel) => {
    const stars = [];
    const fullStars = Math.floor(nivel);
    const hasHalfStar = nivel % 1 !== 0;
    
    // Agregar estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    // Agregar media estrella si es necesario
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    // Agregar estrellas vacías
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div 
      className={`lenguaje-card ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      data-language={lenguaje.nombre}
    >
      <div className="lenguaje-logo">
        <img src={lenguaje.logo} alt={`${lenguaje.nombre} Logo`} />
        <span>{lenguaje.nombre}</span>
      </div>
      
      <div className="card-back">
        <h4>{lenguaje.nombre}</h4>
        <div className="skill-level">
          <div className="stars">
            {renderStars(lenguaje.nivel)}
          </div>
        </div>
        <p>{lenguaje.descripcion}</p>
      </div>
    </div>
  );
};

export default LenguajesCard;