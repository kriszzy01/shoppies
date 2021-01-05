import { combineReducers } from "redux";
import nominationsReducer from "./nominationsSlice";
import searchReducer from "./SearchSlice";

const rootReducer = combineReducers({
  nominations: nominationsReducer,
  searchResults: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export * from "./nominationsSlice";

export default rootReducer;
