import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nominations, Movie } from "../types";

const initialState: Nominations = {
  id: [],
  movies: {},
};

const nominations = createSlice({
  name: "nominations",
  initialState,
  reducers: {
    deleteNomination(state, { payload }: PayloadAction<string>) {
      const filteredIds = state.id.filter((id) => id !== payload);
      state.id = filteredIds;

      const { [payload]: selectedItem, ...otherMovies } = state.movies;
      state.movies = otherMovies;
    },
    addNomination(state, { payload }: PayloadAction<Movie>) {
      state.id.push(payload.imdbID);

      state.movies[payload.imdbID] = payload;
    },
  },
});

export const { deleteNomination, addNomination } = nominations.actions;

export default nominations.reducer;
