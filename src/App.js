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
  background-color: #22254b;
  font-family: 'Poppins, sans-serif';
  padding: 10px 0px;
  width: 100;
`;
