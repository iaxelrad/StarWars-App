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
    <Wrapper>
      <Title>Pick Your Favorite Star Wars Film</Title>
      {movies.length > 0 ? (
        movies.map(movie => {
          return <Movie key={movie.episode_id} movie={movie} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
`;
const Wrapper = styled.div`
  padding: 10px;
`;
