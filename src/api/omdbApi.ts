import axios from "axios";

export const searchMovies = async (movieTitle: string) => {
  const apikey = process.env.REACT_APP_API_KEY;

  const requestURL = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${apikey}`;

  try {
    const searchResults = await axios.get(requestURL);

    const { Search } = searchResults.data;

    return Search;
  } catch (error) {
    throw error;
  }
};
