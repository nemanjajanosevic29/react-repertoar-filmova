import React from "react";

function Movie(props) {
  const { title, hall, price, poster } = props.movie;

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
      </div>

      <div className="buttons">
        <button onClick={() => props.onLike(props.movie)}>Like</button>
        <button onClick={() => props.onDislike(props.movie)}>Dislike</button>
      </div>
    </div>
  );
}

export default Movie;
