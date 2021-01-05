import { RootState } from "../slices";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

export type { RootState };

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

type Ids = Array<number>;

export interface TodoItem {
  id: number;
  description: string;
}

export interface Nominations {
  ids: Ids;
  item: Record<number, TodoItem>;
}

//Search types
export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Awards: string;
}

export interface Search {
  id: Array<string>;
  movies: Record<string, Movie>;
  loading: boolean;
  error: null | string;
}
