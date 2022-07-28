import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid darkgreen;
`;

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <h2>Logo</h2>
    </LogoContainer>
  );
};
