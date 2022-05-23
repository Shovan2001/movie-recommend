import React from "react";
import { removeMovieFromWatchlist,addMovieToWatched,moveToWatchlist,removeMovieFromWatched } from "../Slice/movieslice";
import { useDispatch} from "react-redux";

export const MovieControls = ({ type, movie }) => {
  const dispatch = useDispatch();


  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => dispatch(addMovieToWatched(movie))}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => dispatch(removeMovieFromWatchlist(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => dispatch(moveToWatchlist(movie))}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => dispatch(removeMovieFromWatched(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
