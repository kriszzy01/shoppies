import { Movie } from "../types";

export const getStoredNominations = () => {
  const previousNominations: Array<Movie> = [];
  const previousIds: Array<string> = [];

  const localStore = window.localStorage;

  if (localStore.length !== 0) {
    for (let i = 0; i <= localStore.length - 1; i++) {
      let id = localStore.key(i) as string;

      let nomination = localStore.getItem(id);

      if (nomination) {
        previousIds.push(id);
        previousNominations.push(JSON.parse(nomination));
      }
    }
  }

  return { previousNominations, previousIds };
};
