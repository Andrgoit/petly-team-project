import React from 'react';
import LoginForm from '../../components/AuthForm/LoginForm/LoginForm';

import { AuthContainer, Title } from './LoginPage.styled';

const Login = () => {
  // RTK Query (Отримання "токену")
  // const { token } = useSelector(getUser);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
//  <AuthContainer>
//    <Title>Login</Title>
//  </AuthContainer>;
