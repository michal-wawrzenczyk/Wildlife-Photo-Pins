import React from 'react';
import styled from 'styled-components';
import { Filter } from './filter/Filter';
import { Photos } from './photos/Photos';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <Filter />
      <Photos />
    </MainContainer>
  );
};
