import React from "react";

function Movie(props) {
  const { title, hall, price, poster, likes, dislikes } = props.movie;

  return (
    <div className="movie-row">
      <img
        src={poster}
        alt={title}
        className="poster"
      />

      <div className="movie-text">
        <p>
          {title}
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
        <button onClick={() => props.onEdit()}>Izmeni</button>
      </div>
    </div>
  );
}

export default Movie;