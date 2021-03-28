import React from 'react';
import styled from 'styled-components';

import favorite from '../common/assets/favorite.png';
import notFavorite from '../common/assets/not-favorite.png';

export const Legend = () => {
  return (
    <LegendContainer>
      <LegendSubtitle>
        <Img src={favorite} alt="favorite-icon" />
        <h2>May the force be with this movie</h2>
      </LegendSubtitle>
      <LegendSubtitle>
        <Img src={notFavorite} alt="favorite-icon" />
        <h2>This is not the droid I'm looking for</h2>
      </LegendSubtitle>
    </LegendContainer>
  );
};

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LegendSubtitle = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
`;
