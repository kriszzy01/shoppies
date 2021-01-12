import { RootState } from "../slices";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

export type { RootState };

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

type Ids = Array<string>;

export interface MovieDetails {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  imdbRating: string;
}

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Detail: MovieDetails;
}

export interface Nominations {
  id: Ids;
  movies: Record<string, Movie>;
}

export interface Search extends Nominations {
  totalResults: string;
  searchedInput: string;
  loading: boolean;
  error: null | string;
}
