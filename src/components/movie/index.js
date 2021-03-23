import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BLACK } from '../../common/colors';
import FavoriteIcon from '../FavoriteIcon';
import { checkFavorites } from './logic/checkFavorites';
import { deleteFromFavorites } from './logic/deleteFromFavorites';
import { saveToFavorites } from './logic/saveToFavorites';

export const Movie = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorites(movie, setIsFavorite);
  }, [movie]);

  const toggleIsFavorite = () => {
    if (!isFavorite) {
      saveToFavorites(movie);
    } else {
      deleteFromFavorites(movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <MovieItem>
      <div>
        <Title>{movie.title}</Title>
        {isFavorite ? <p>{movie.opening_crawl}</p> : null}
      </div>
      <HorizontalSpacer width={5} />
      <div onClick={toggleIsFavorite}>
        <FavoriteIcon isFavorite={isFavorite} />
      </div>
    </MovieItem>
  );
};

const MovieItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 10px;
  padding: 10px;
  background-color: ${BLACK};
  border-radius: 5px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
`;

const HorizontalSpacer = styled.div`
  width: ${props => props.width}px;
`;
