import React from 'react';
import { Container } from './components/Container';
import styled from 'styled-components';

export const App = () => {
  return (
    <Wrapper>
      <Container />
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
