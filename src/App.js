// Subham Patel 7266896432 subhampatel9547@gmail.com

import React from 'react';
import BasketballPlayerCard from './Component/BasketballPlayerCard';
import Bottom from './Component/Bottom';

function App() {
  const player = {
    name: "LeBron James",
    image: "https://images.pexels.com/photos/159611/basketball-player-game-sport-159611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
      <Bottom/>
    </div>
  );
}

export default App;
