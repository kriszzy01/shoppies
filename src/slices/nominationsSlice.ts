import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, TodoItem } from "../types";

const initialState: State = {
  ids: [1, 2],
  item: {
    1: { id: 1, description: "Remember to buy eggs" },
    2: { id: 2, description: "Learn Haskel" },
  },
};

const nominations = createSlice({
  name: "nominations",
  initialState,
  reducers: {
    deleteItem(state, { payload }: PayloadAction<number>) {
      const filteredIds = state.ids.filter((id) => id !== payload);
      state.ids = filteredIds;

      const { [payload]: selectedItem, ...otherItems } = state.item;
      state.item = otherItems;
    },
    addItem(state, { payload }: PayloadAction<TodoItem>) {
      state.ids.push(payload.id);

      state.item[payload.id] = payload;
    },
  },
});

export const { deleteItem, addItem } = nominations.actions;

export default nominations.reducer;
