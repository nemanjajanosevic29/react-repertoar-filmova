import React from "react";
import './App.css';
import Movie from './Movie';

function App() {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const dateString = `${day}.${month}.${year}.`;

  const movies = [
    {
      title: "Captain America - The first avenger",
      hall: 2,
      price: 350
    },
    {
      title: "The papillon",
      hall: 1,
      price: 300
    },
    {
      title: "The lost city of Z",
      hall: 5,
      price: 350
    }
  ];

  return (
    <div className="App">
      <h1>Repertoar za danas ({dateString})</h1>

      <div className="movies-list">
        {movies.map((movie, index) => (
          <Movie 
            key={index}
            title={movie.title}
            hall={movie.hall}
            price={movie.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;