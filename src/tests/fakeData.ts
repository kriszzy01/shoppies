import { build, fake } from "@jackfranklin/test-data-bot";

export const fakeMovie = build("Movie", {
  fields: {
    imdbID: fake((f) => f.random.uuid()),
    Title: fake((f) => f.random.word()),
    Year: fake((f) => String(f.random.number())),
  },
});

export const fakeMovies = [fakeMovie(), fakeMovie(), fakeMovie()];

export const fakeTotalResults = String(Math.random() * 100);
