import React from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from '../container';

export const UniversalLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};
