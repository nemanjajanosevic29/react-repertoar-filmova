import React from "react";

function Movie(props) {
  return (
    <div className="movie-row">
      <img 
        src="https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg" 
        alt="clapperboard"
        className="clapperboard"
      />
      <p className="movie-text">
        {props.title}, sala: {props.hall}, cena: {props.price}din
      </p>
    </div>
  );
}

export default Movie;
