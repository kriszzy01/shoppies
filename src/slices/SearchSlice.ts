import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchMovies } from "../api/omdbApi";
import { Search, Movie, AppThunk } from "../types";

const initialState: Search = {
  id: [],
  movies: {},
  loading: false,
  error: null,
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },

    searchMoviesSuccess(state, { payload }: PayloadAction<Array<Movie>>) {
      payload.forEach((movie) => {
        const { imdbID } = movie;

        state.id.push(imdbID);
        state.movies[imdbID] = movie;
      });

      state.loading = false;
      state.error = null;
    },

    searchMoviesFailure(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
} = search.actions;

export default search.reducer; 

//Redux Thunk
export const fetchMovies = (movieTitle: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(searchMoviesStart());

    const movies = await searchMovies(movieTitle);

    dispatch(searchMoviesSuccess(movies));
  } catch (error) {
    dispatch(searchMoviesFailure(error.message));
  }
};
