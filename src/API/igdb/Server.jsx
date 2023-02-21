import { useState, useEffect } from 'react';

function Server() {
  const [gamesData, setGamesData] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('https://api.rawg.io/api/games?key=26d309e0e2914b0f9e16b1e15182e7fe&dates=2019-09-01,2019-09-30&platforms=18,1,7', options)
      .then(response => response.json())
      .then(data => {
        setGamesData(data);
      })
      .catch(err => console.error(err));
  }, []);

return (
        gamesData ? console.log('Game Data Loaded') : console.log('Waiting for Loading')
  )
}
export default Server