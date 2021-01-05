import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, TodoItem } from "../types";

const initialState = {};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {},
});

//export const { deleteItem, addItem } = search.actions;

export default search.reducer;
