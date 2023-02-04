import React from 'react';
import { LoginForm } from '../../components/AuthForm/LoginForm/LoginForm';

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
