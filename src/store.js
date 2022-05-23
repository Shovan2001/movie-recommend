import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import movieReducer from "./Slice/movieslice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
