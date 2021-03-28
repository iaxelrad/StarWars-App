import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get('https://swapi.dev/api/films');
    return data.results;
  } catch (err) {
    console.log(err);
  }
};
