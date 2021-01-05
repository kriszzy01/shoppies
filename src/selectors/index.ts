import { RootState } from "../slices";

//Nominations Selectors
export const getIds = (state: RootState) => state.nominations.ids;
export const getItems = (state: RootState) => state.nominations.item;
