import React from 'react';
import styled from 'styled-components';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';
import Button from './components/Button';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Console cmd 2022. Ɐrtem</Title>
      </Flex>
      <Flex direction="column" margin="20px 0">
        <Console />
        <Button color="green" align="flex-end">
          Send
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
