import { Movie } from "../types";

export const getStoredNominations = () => {
  const previousNominations: Array<Movie> = [];

  const localStore = window.localStorage;

  for (let i = 0; i <= localStore.length - 1; i++) {
    let id = "";

    if (localStore.length !== 0) {
      id = localStore.key(i) as string;
    }

    let nomination = localStore.getItem(id);

    if (nomination) {
      previousNominations.push(JSON.parse(nomination));
    }
  }

  return previousNominations;
};
