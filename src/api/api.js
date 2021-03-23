import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const films = await axios.get('https://swapi.dev/api/films');
    return { res: films.data.results };
  } catch (err) {
    console.log(err);
  }
};
