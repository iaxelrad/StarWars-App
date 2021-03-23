import { fetchMovies } from './api';

export const fetchFilmsFromAPI = async setMovies => {
  const { res } = await fetchMovies();
  if (res) {
    setMovies(res);
  } else return;
};
