import { RootState } from "../slices";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

export type { RootState };

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

type Ids = Array<string>;

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
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
