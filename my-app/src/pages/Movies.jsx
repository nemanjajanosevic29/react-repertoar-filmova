import React, { useState, useEffect } from 'react';
import Movie from '../Movie';
import { getAllMovies, likeMovie, dislikeMovie, deleteMovie } from '../services/movieService';
import { Link } from 'react-router-dom';

function Movies() {
  const today = new Date();
  const dateString = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`;

  const [movies, setMovies] = useState([]);
  const [bestMovie, setBestMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const data = await getAllMovies();
      setMovies(data);
      setErrorMsg('');
    } catch (error) {
      setErrorMsg('Greska pri ucitavanju filmova. Proverite da li je server pokrenut.');
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("Postavka filmova");
    fetchMovies();

    return () => {
      console.log("Sklanjanje filmova");
    };
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;
    const best = movies.reduce((prev, current) =>
      (current.likes - current.dislikes) > (prev.likes - prev.dislikes) ? current : prev
    );
    setBestMovie(best);
  }, [movies]);

  const handleLike = async (id) => {
    try {
      await likeMovie(id);
      setMovies(prev => prev.map(m =>
        m.id === id ? { ...m, likes: m.likes + 1 } : m
      ));
    } catch (error) {
      setErrorMsg('Greska pri lajkovanju filma.');
    }
  };

  const handleDislike = async (id) => {
    try {
      await dislikeMovie(id);
      setMovies(prev => prev.map(m =>
        m.id === id ? { ...m, dislikes: m.dislikes + 1 } : m
      ));
    } catch (error) {
      setErrorMsg('Greska pri dislajkovanju filma.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(prev => prev.filter(m => m.id !== id));
    } catch (error) {
      setErrorMsg('Greska pri brisanju filma.');
    }
  };

  if (loading) return (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Ucitavanje filmova...</p>
  </div>
  );

  return (
    <div>
      <h2>Repertoar za danas ({dateString})</h2>

      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      {bestMovie && (
        <div className="best-movie">
          <h3>Najbolje ocenjen film</h3>
          <p>{bestMovie.name} — ocena: {bestMovie.likes - bestMovie.dislikes}</p>
        </div>
      )}

      <div className="movies-list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onLike={() => handleLike(movie.id)}
            onDislike={() => handleDislike(movie.id)}
            onDelete={() => handleDelete(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;