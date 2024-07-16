
import React from 'react';
import '../CSS/BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className='player-image-Div'>
      <img src={image} alt={`${name}`} className="player-image" />
      </div>
      <h2 className="player-name">{name}</h2>
      <div className="player-stats">
      <p className="player-position">{position}</p>
      
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
