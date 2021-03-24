import React from 'react';
import { MainPage } from './components/MainPage';
import styled from 'styled-components';

export const App = () => {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Poppins, sans-serif';
  color: white;
`;
