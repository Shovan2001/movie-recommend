import React from "react";
import Moment from "react-moment";
import { addMovieToWatched,getWatchList,getWatched,addMovieToWatchlist } from "../Slice/movieslice";
import { useDispatch, useSelector } from "react-redux";

export const ResultCard = ({ movie }) => {
  
  const dispatch=useDispatch();
  
  const watched=useSelector(getWatched);
  const watchlist=useSelector(getWatchList);
  
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => dispatch(addMovieToWatchlist(movie))}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => dispatch(addMovieToWatched(movie))}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
