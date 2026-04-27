import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  const { id, name, hall, price, poster, likes, dislikes } = props.movie;

  return (
    <div className="movie-row">
      <img
        src={poster}
        alt={name}
        className="poster"
      />

      <div className="movie-text">
        <p>
          {name}
          {hall
            ? `, sala: ${hall}, cena: ${price || 300}din`
            : ` - Film jos uvek nije u ponudi`
          }
        </p>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
      </div>

      <div className="buttons">
        <button onClick={() => props.onLike()}>Like</button>
        <button onClick={() => props.onDislike()}>Dislike</button>
        <Link to={`/movies/edit/${id}`}>
          <button>Izmeni</button>
        </Link>
        <button onClick={() => props.onDelete()}>Obriši</button>
      </div>
    </div>
  );
}

export default Movie;