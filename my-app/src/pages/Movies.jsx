import React, { useState } from 'react';
import Movie from '../Movie';
import MovieForm from './MovieForm';

function Movies() {
  const today = new Date();
  const dateString = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`;

  const [movies, setMovies] = useState([
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
      price: 300,
      poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg"
    },
    {
      title: "Bullet Train",
      poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg"
    }
  ]);

  const [editMovie, setEditMovie] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (movieData) => {
    if (editMovie !== null) {
      const updated = [...movies];
      updated[editIndex] = movieData;
      setMovies(updated);
      setEditMovie(null);
      setEditIndex(null);
    } else {
      setMovies(prev => [...prev, movieData]);
    }
  };

  const handleEdit = (movie, index) => {
    setEditMovie(movie);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditMovie(null);
    setEditIndex(null);
  };

  return (
    <div>
      <h2>Repertoar za danas ({dateString})</h2>

      <MovieForm
        onSubmit={handleFormSubmit}
        editMovie={editMovie}
        onCancelEdit={handleCancelEdit}
      />

      <div className="movies-list">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            onEdit={() => handleEdit(movie, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;