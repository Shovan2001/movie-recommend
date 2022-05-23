import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
    watched: localStorage.getItem("watched")
      ? JSON.parse(localStorage.getItem("watched"))
      : [],
  };
  

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovieToWatchlist: (state, action) => {
      state.watchlist=[...state.watchlist,action.payload];
    },

    removeMovieFromWatchlist: (state,action)=>{
        state.watchlist=state.watchlist.filter(movie=>movie.id!==action.payload);
    },

    addMovieToWatched: (state,action)=>{
        state.watchlist=state.watchlist.filter(movie=>movie.id!==action.payload);
        state.watched=[...state.watched,action.payload];
    },

    moveToWatchlist:(state,action)=>{
        state.watched=state.watched.filter(movie=>movie.id!==action.payload);
        state.watchlist=[...state.watchlist,action.payload];
    },

    removeMovieFromWatched:(state,action)=>{
        state.watched=state.watched.filter(movie=>movie.id!==action.payload);
    }

  },
});

export const {addMovieToWatchlist ,  removeMovieFromWatchlist,addMovieToWatched,moveToWatchlist,removeMovieFromWatched} = movieSlice.actions;


export const getWatchList=(state)=>state.movie.watchlist;
export const getWatched=(state)=>state.movie.watched;

export default movieSlice.reducer;
