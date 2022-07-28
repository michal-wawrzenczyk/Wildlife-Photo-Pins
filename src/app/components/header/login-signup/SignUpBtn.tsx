import React from 'react';
import { SubmitButton } from '../../shared/buttons/SubmitButton-styles';
import { WEB_PATHS } from '../../../../routes/paths';
import { NavLink } from 'react-router-dom';

export const SignUp: React.FC = () => {
  return (
    <NavLink to={WEB_PATHS.signUp}>
      <SubmitButton>Sign Up</SubmitButton>
    </NavLink>
  );
};
