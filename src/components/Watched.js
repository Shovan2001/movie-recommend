import React from "react";
import { getWatched } from "../Slice/movieslice";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";

export const Watched = () => {

  const watched=useSelector(getWatched);
  return (
    <div className="movie-page" style={{ 
      backgroundImage: `url("./image/login-background.jpg")`,minHeight:"100vh"
    }}>
      <div className="container">
        <div className="header">
          <h1 className="heading" style={{color:"white"}}>Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
