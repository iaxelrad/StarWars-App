import React from 'react';
import { Container } from './components/Container';
import styled from 'styled-components';
import { DARK_BLUE_1 } from './common/colors';

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
  background-color: ${DARK_BLUE_1};
  font-family: 'Poppins, sans-serif';
  color: white;
`;
