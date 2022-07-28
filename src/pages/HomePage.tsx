import React from 'react';
import styled from 'styled-components';

import { Main } from '../app/components/Main';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Main />
    </HomePageContainer>
  );
};

export default HomePage;
