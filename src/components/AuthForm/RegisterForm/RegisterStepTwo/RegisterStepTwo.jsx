import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Input,
  ErrorInput,
  InputBox,
  ButtonForm,
  ButtonPrev,
} from '../RegisterForm.styled';

export const RegisterStepTwo = ({ next, data, prev }) => {
  const nameRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  const locationRegex = /^[A-Z\-’ ]{1,}[a-z\-’ ]+, [a-zA-Z\-’ ]+$/;
  const phoneRegex = /^\+380........./;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .matches(nameRegex, 'The name must contain only latin letters'),
    location: yup
      .string()
      .required('City is required')
      .matches(locationRegex, 'City is not valid. Example: Brovary, Kyiv'),
    phone: yup
      .string()
      .required('Phone is required')
      .max(13)
      .matches(phoneRegex, 'Phone is not valid. Example: +380XXXXXXXXX'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: values => {
      const registerValues = { ...values };
      delete registerValues.confirmPassword;
      next(registerValues, true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBox>
        <Input
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorInput>{formik.errors.name}</ErrorInput>
        )}
      </InputBox>
      <InputBox>
        <Input
          name="location"
          placeholder="City, region"
          onChange={formik.handleChange}
          value={formik.values.location.replace(/(^|\s)\S/g, function (letter) {
            return letter.toUpperCase();
          })}
        />
        {formik.touched.location && formik.errors.location && (
          <ErrorInput>{formik.errors.location}</ErrorInput>
        )}
      </InputBox>
      <InputBox lastMargin>
        <Input
          name="phone"
          placeholder="Mobile phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <ErrorInput>{formik.errors.phone}</ErrorInput>
        )}
      </InputBox>
      <ButtonForm type="submit" lastMargin>
        Register
      </ButtonForm>
      <ButtonPrev type="button" onClick={() => prev(formik.values)}>
        Back
      </ButtonPrev>
    </form>
  );
};
