import React from 'react';
import { Header } from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from '../container';

export const MainLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
