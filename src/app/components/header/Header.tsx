import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { LogOrSign } from './login-signup';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  height: 100px;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <LogOrSign />
    </HeaderContainer>
  );
};
