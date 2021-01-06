import { RootState } from "../slices";

//Nominations Selectors
export const getNominations = (state: RootState) => state.nominations;

//Search Results Selectors
export const getSearchedResults = (state: RootState) => state.searchResults;
