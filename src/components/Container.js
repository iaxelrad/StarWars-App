import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchFilmsFromAPI } from '../api/fetchFilmsFromAPI';
import { Movie } from './movie';

export const Container = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilmsFromAPI(setMovies);
  }, []);

  return (
    <Card>
      <div>
        {movies.length > 0 ? (
          movies.map(movie => {
            return <Movie key={movie.episode_id} movie={movie} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Card>
  );
};

const Card = styled.div`
  height: 100vh;
  color: white;
`;
