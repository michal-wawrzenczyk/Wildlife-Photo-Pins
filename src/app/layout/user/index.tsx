import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from '../container';

export const UserLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <h1>User Profile Page</h1>
      <Outlet />
    </LayoutContainer>
  );
};
