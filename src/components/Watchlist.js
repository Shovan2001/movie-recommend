import React from "react";
import { getWatchList } from "../Slice/movieslice";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const watchlist=useSelector(getWatchList);
  return (
    <div className="movie-page" style={{ 
      backgroundImage: `url("./image/login-background.jpg")`,minHeight:"100vh"
    }}>
      <div className="container">
        <div className="header">
          <h1 className="heading" style={{color:"white"}}>My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
