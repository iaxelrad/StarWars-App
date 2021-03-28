import React from 'react';
import styled from 'styled-components';

export const LegendItem = ({ src, text }) => {
  return (
    <LegendSubtitle>
      <Img src={src} alt={src} />
      <h2>{text}</h2>
    </LegendSubtitle>
  );
};

const LegendSubtitle = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
`;
