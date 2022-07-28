import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { WEB_PATHS } from './paths';

import { MainLayout } from '../app/layout/main';
import { UniversalLayout } from '../app/layout/universal';
import { UserLayout } from '../app/layout/user';
import { Filter } from '../app/components/filter/Filter';

const LoadingPage =
  (Component: React.ElementType) =>
  (props: unknown): JSX.Element =>
    (
      <Suspense
        fallback={
          <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
            <p>Loading...</p>
          </div>
        }>
        <Component {...props} />
      </Suspense>
    );

const HomePage = LoadingPage(lazy(() => import('../pages/HomePage')));
const LogIn = LoadingPage(lazy(() => import('../pages/LogIn')));
const SignUp = LoadingPage(lazy(() => import('../pages/SignUp')));
const User = LoadingPage(lazy(() => import('../pages/User')));
const PhotoDetails = LoadingPage(lazy(() => import('../pages/PhotoDetails')));
const Error404 = LoadingPage(lazy(() => import('../pages/Error404')));

export const Router: React.FC = () => {
  return useRoutes([
    {
      path: WEB_PATHS.home,
      element: <MainLayout />,
      children: [
        {
          path: WEB_PATHS.home,
          element: <HomePage />,
          children: [
            {
              path: WEB_PATHS.photoProvince,
              element: <Filter />
            }
          ]
        },
        { path: WEB_PATHS.photoDetails, element: <PhotoDetails /> }
      ]
    },

    {
      element: <UniversalLayout />,
      children: [
        { path: WEB_PATHS.logIn, element: <LogIn /> },
        { path: WEB_PATHS.signUp, element: <SignUp /> },
        { path: WEB_PATHS.page404, element: <Error404 /> }
      ]
    },

    {
      element: <UserLayout />,
      children: [{ path: WEB_PATHS.profile, element: <User /> }]
    },
    { path: '*', element: <Navigate to={WEB_PATHS.page404} replace /> }
  ]);
};
