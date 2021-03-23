import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
        <div>{movie.title}</div>
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
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px;
  background-color: black;
  border-radius: 5px;
`;

const HorizontalSpacer = styled.div`
  width: ${props => props.width}px;
`;
