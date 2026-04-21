import React, { useState } from "react";

function Movie(props) {
  const { title, hall, price, poster } = props.movie;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike = async () => {
    setLikes(prev => prev + 1);
  };

  const onDislike = async () => {
    setDislikes(prev => prev + 1);
  };

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
        <button onClick={() => onLike()}>Like</button>
        <button onClick={() => onDislike()}>Dislike</button>
      </div>
    </div>
  );
}

export default Movie;