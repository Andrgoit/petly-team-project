import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Input,
  ErrorInput,
  InputBox,
  ButtonForm,
} from '../RegisterForm.styled';

export const RegisterStepOne = ({ next, data }) => {
  const passwordRexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

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
      .matches(passwordRexExp, 'Password is not valid')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .when('password', {
        is: value => (value && value.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], 'Both passwords must be the same'),
      }),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: values => {
      next(values);
    },
  });

  return (
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
      <InputBox lastMargin>
        <Input
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <ErrorInput>{formik.errors.confirmPassword}</ErrorInput>
        )}
      </InputBox>
      <ButtonForm type="submit">Next</ButtonForm>
    </form>
  );
};
