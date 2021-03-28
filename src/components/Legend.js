import React from 'react';
import styled from 'styled-components';

import favorite from '../common/assets/favorite.png';
import notFavorite from '../common/assets/not-favorite.png';
import { LegendItem } from './LegendItem';

export const Legend = () => {
  return (
    <LegendContainer>
      <LegendItem src={favorite} text=" - May the force be with this movie" />
      <LegendItem
        src={notFavorite}
        text=" - This is not the droid I'm looking for"
      />
    </LegendContainer>
  );
};

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
