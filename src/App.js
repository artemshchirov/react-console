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
        <Title color="green">Console cmd 2022. Ɐrtem</Title>
      </Flex>
      <Flex direction="column">
        <Console />
        <Button align="flex-end">Отправить</Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
