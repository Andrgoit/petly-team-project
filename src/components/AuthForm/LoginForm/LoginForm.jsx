import {
  LinkToRegister,
  DontLog,
  Title,
  Input,
  Button,
} from './LoginForm.styled';
import React from 'react';
import { useState } from 'react';
import { AuthContainer } from '../AuthForm.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(login(user));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <AuthContainer>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        <DontLog>
          Don't have an account?{' '}
          <LinkToRegister href="#">Register</LinkToRegister>
        </DontLog>
      </AuthContainer>
    </>
  );
};

export default LoginForm;
