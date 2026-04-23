import React, { useState, useEffect } from 'react';
import Movie from '../Movie';
import MovieForm from './MovieForm';

function Movies() {
  const today = new Date();
  const dateString = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`;

  const [movies, setMovies] = useState([
    { title: "Captain America - The First Avenger", hall: 2, price: 350, poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg", likes: 0, dislikes: 0 },
    { title: "The Papillon", hall: 1, price: 300, poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg", likes: 0, dislikes: 0 },
    { title: "The Lost City of Z", hall: 5, price: 350, poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", likes: 0, dislikes: 0 },
    { title: "Klaus", hall: 3, price: 300, poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg", likes: 0, dislikes: 0 },
    { title: "Bullet Train", poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg", likes: 0, dislikes: 0 }
  ]);

  const [editMovie, setEditMovie] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [bestMovie, setBestMovie] = useState(null);

  useEffect(() => {
    console.log("Postavka filmova");

    return () => {
      console.log("Sklanjanje filmova");
    };
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const best = movies.reduce((prev, current) => {
      const prevScore = prev.likes - prev.dislikes;
      const currentScore = current.likes - current.dislikes;
      return currentScore > prevScore ? current : prev;
    });

    setBestMovie(best);
  }, [movies]);

  const handleFormSubmit = (movieData) => {
    if (editMovie !== null) {
      const updated = [...movies];
      updated[editIndex] = { ...movieData, likes: movies[editIndex].likes, dislikes: movies[editIndex].dislikes };
      setMovies(updated);
      setEditMovie(null);
      setEditIndex(null);
    } else {
      const randomLikes = Math.floor(Math.random() * 5) + 1;
      const randomDislikes = Math.floor(Math.random() * 5) + 1;
      setMovies(prev => [...prev, { ...movieData, likes: randomLikes, dislikes: randomDislikes }]);
    }
  };

  const handleLike = (index) => {
    const updated = [...movies];
    updated[index] = { ...updated[index], likes: updated[index].likes + 1 };
    setMovies(updated);
  };

  const handleDislike = (index) => {
    const updated = [...movies];
    updated[index] = { ...updated[index], dislikes: updated[index].dislikes + 1 };
    setMovies(updated);
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

      {bestMovie && (
        <div className="best-movie">
          <h3>Najbolje ocenjen film</h3>
          <p>{bestMovie.title} — ocena: {bestMovie.likes - bestMovie.dislikes}</p>
        </div>
      )}

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
            onLike={() => handleLike(index)}
            onDislike={() => handleDislike(index)}
            onEdit={() => handleEdit(movie, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;