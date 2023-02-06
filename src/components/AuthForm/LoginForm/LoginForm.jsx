import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  LoginContainer,
  LinkToRegister,
  DontLog,
  Title,
  Input,
  Button,
  ErrorInput,
  InputBox,
} from './LoginForm.styled';

import React from 'react';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const passwordRexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is not valid')
      .required('Email is required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .max(32)
      .matches(/^[^ ]{7,32}$/, 'The password should not contain a space')
      // .matches(passwordRexExp, 'Password is not valid')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(login(values));
      formik.resetForm();
    },
  });

  return (
    <LoginContainer>
      <Title>Login</Title>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <InputBox>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorInput>{formik.errors.email}</ErrorInput>
          )}
        </InputBox>
        <InputBox>
          <Input
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorInput>{formik.errors.password}</ErrorInput>
          )}
        </InputBox>
        <Button type="submit">Login</Button>
      </form>
      <DontLog>
        Don't have an account?{' '}
        <LinkToRegister to="/register">Register</LinkToRegister>{' '}
      </DontLog>
    </LoginContainer>
  );
};
