import React from 'react';

import favorite from '../common/assets/favorite.png';
import notFavorite from '../common/assets/not-favorite.png';

export const FavoriteIcon = ({ isFavorite = false }) => {
  return isFavorite ? (
    <img src={favorite} alt="favorite-icon" />
  ) : (
    <img src={notFavorite} alt="not-favorite-icon" />
  );
};
