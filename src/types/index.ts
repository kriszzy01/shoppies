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

export interface State {
  ids: Ids;
  item: Record<number, TodoItem>;
}
