import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchFilmsFromAPI } from '../api/fetchFilmsFromAPI';
import { Movie } from './movie';

export const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilmsFromAPI(setMovies);
  }, []);

  return (
    <Wrapper>
      <Title>Pick Your Favorite Star Wars Film</Title>
      <FilmWrapper>
        {movies ? (
          movies.map(movie => {
            return <Movie key={movie.episode_id} movie={movie} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </FilmWrapper>
    </Wrapper>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 3em;
`;
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 95vh;
`;
const FilmWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  justify-content: center;
  align-content: center;
  margin: 10px;
`;
