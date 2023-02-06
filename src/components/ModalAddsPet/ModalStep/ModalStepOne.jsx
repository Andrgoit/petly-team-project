import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { parse } from 'date-fns';

import {
  Label,
  Input,
  ButtonGroup,
  ButtonNext,
  ButtonCancel,
} from './ModalStep.styled.jsx';

const today = new Date();

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z ]*$/g, 'Only alphabetic characters are allowed')
    .required(),
  date: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .required()
    .min('1950-11-13', 'Date is too early')
    .max(today),
  breed: yup
    .string()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphanumeric characters are allowed')
    .required(),
});

export default function ModalStepOne({ data, setFormData, next, onClose }) {
  const handleSubmit = values => {
    next({ ...values }, false);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="on">
        <Label htmlFor="name">Name pet</Label>
        <Input type="text" name="name" placeholder="Type name pet" />
        <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
        <Label htmlFor="date">Date of birth</Label>
        <Input name="date" placeholder="Type date of birth" />
        <ErrorMessage name="date" render={msg => <div>{msg}</div>} />

        <Label htmlFor="breed">Breed</Label>
        <div style={{ position: 'relative' }}>
          <Input name="breed" placeholder="Type breed" autoComplete="off" />
        </div>
        <ErrorMessage name="breed" render={msg => <div>{msg}</div>} />

        <ButtonGroup>
          <ButtonCancel type="button" onClick={() => onClose()}>
            Cancel
          </ButtonCancel>
          <ButtonNext type="submit">Next</ButtonNext>
        </ButtonGroup>
      </Form>
    </Formik>
  );
}
