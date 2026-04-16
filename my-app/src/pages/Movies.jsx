import Movie from '../Movie';   
import React from 'react';

function Movies() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dateString = `${day}.${month}.${year}.`;

  const movies = [
    {
      title: "Captain America - The First Avenger",
      hall: 2,
      price: 350,
      poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg"
    },
    {
      title: "The Papillon",
      hall: 1,
      price: 300,
      poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg"
    },
    {
      title: "The Lost City of Z",
      hall: 5,
      price: 350,
      poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Klaus",
      hall: 3,
      poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg"
    },
    {
      title: "Bullet Train",
      poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg"
    }
  ];

  const handleLike = (movie) => {
    alert(`Dodelili ste "Like" za film "${movie.title}"!`);
  };

  const handleDislike = (movie) => {
    alert(`Dodelili ste "Dislike" za film "${movie.title}"!`);
  };

  return (
    <div>
      <h2>Repertoar za danas ({dateString})</h2>
      
      <div className="movies-list">
        {movies.map((movie, index) => (
          <Movie 
            key={index}
            movie={movie}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;