import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchMovies, getMovieDetails } from "../api/omdbApi";
import { Search, Movie, AppThunk, MovieDetails } from "../types";

export const initialState: Search = {
  totalResults: "",
  searchedInput: "",
  id: [],
  movies: {},
  loading: false,
  error: null,
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedInput(state, { payload }: PayloadAction<string>) {
      state.searchedInput = payload;
    },

    searchMoviesStart(state) {
      //Clear previous search results
      state.id = [];
      state.movies = {};
      state.loading = true;
      state.error = null;
    },

    searchMoviesSuccess(
      state,
      { payload }: PayloadAction<{ Search: Array<Movie>; totalResults: string }>
    ) {
      payload.Search.forEach((movie) => {
        const { imdbID } = movie;

        state.id.push(imdbID);
        state.movies[imdbID] = movie;
      });

      state.totalResults = payload.totalResults;

      state.loading = false;
      state.error = null;
    },

    searchMoviesFailure(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },

    setMovieDetails(state, { payload }: PayloadAction<MovieDetails>) {
      const selectedMovie = state.movies[payload.imdbID];
      selectedMovie.Detail = payload;
    },
  },
});

export const {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
  setSearchedInput,
  setMovieDetails,
} = search.actions;

export default search.reducer;

//Redux Thunk
export const fetchMovies = (
  movieTitle: string,
  page: number = 1
): AppThunk => async (dispatch) => {
  try {
    dispatch(searchMoviesStart());

    const movies = await searchMovies(movieTitle, page);

    dispatch(searchMoviesSuccess(movies));
  } catch (error) {
    dispatch(searchMoviesFailure(error.message));
  }
};

export const fetchMovieDetails = (movieId: string): AppThunk => async (
  dispatch
) => {
  const details = await getMovieDetails(movieId);

  dispatch(setMovieDetails(details));
};
