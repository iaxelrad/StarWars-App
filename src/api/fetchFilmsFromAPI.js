import { fetchMovies } from './api';

export const fetchFilmsFromAPI = async setMovies => {
  try {
    const res = await fetchMovies();
    if (res) {
      setMovies(res);
    } else return;
  } catch (err) {
    console.log(err);
  }
};
