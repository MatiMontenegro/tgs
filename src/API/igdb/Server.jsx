import React from 'react'

var options = {
  method: 'GET',
};
let product = [];
let productMultimedia = [];

fetch('https://api.rawg.io/api/games?key=26d309e0e2914b0f9e16b1e15182e7fe&dates=2019-09-01,2019-09-30&platforms=18,1,7', options)
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.error(err));

const {} = productMultimedia;
const {name, genres, platforms, released, rating, stores} = product;

    function Server() {
      return (
    <div>
      <p>Top Games {name},{genres},{platforms}, {released} ,{rating} ,{stores} </p>
      </div>
    )
  }
  
  
  export default Server