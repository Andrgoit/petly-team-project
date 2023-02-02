import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import parse from 'date-fns/parse';
import '../ModalNotice/modal.css';
import {
  MainNoticeBtn,
  BtnsWrapper,
  RadioBtn,
  StyledText,
  MainBtnsWrapper,
  RadioBtnText,
  RadioBtnWrapper,
  InputWrapper,
  StyledInput,
  InputLabel,
  StyledErrMsg,
} from './ModalAddNotice.styled';

const today = new Date();

const validationSchema = yup.object({
  titleOfAd: yup
    .string()
    .min(2)
    .max(48)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  category: yup.string().required('Category is required!'),
  namePet: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(36)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  birthDate: yup
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
});

const FirstStep = ({
  setFormValues,
  setIsFirstStep,
  closeModal,
  formValues,
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formValues}
      onSubmit={values => {
        setFormValues(prevValues => ({ ...prevValues, ...values }));
        setIsFirstStep(false);
      }}
    >
      {({ values }) => (
        <Form>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur{' '}
          </StyledText>
          <BtnsWrapper>
            <RadioBtnWrapper htmlFor="lost/found">
              <RadioBtn
                type="radio"
                name="category"
                value="lost/found"
                id="lost/found"
                checked={values.category === 'lost/found'}
              />
              <RadioBtnText>lost/found</RadioBtnText>
            </RadioBtnWrapper>
            <RadioBtnWrapper htmlFor="in good hands">
              <RadioBtn
                type="radio"
                name="category"
                value="in good hands"
                id="in good hands"
                checked={values.category === 'in good hands'}
              />
              <RadioBtnText>in good hands</RadioBtnText>
            </RadioBtnWrapper>
            <RadioBtnWrapper htmlFor="sell">
              <RadioBtn
                type="radio"
                name="category"
                value="sell"
                id="sell"
                checked={values.category === 'sell'}
              />
              <RadioBtnText>sell</RadioBtnText>
            </RadioBtnWrapper>
            <ErrorMessage
              name="category"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </BtnsWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="titleOfAd">
              Tittle of ad*
            </InputLabel>
            <StyledInput
              id="titleOfAd"
              name="titleOfAd"
              placeholder="Type name pet"
              autoComplete="off"
            />
            <ErrorMessage
              name="titleOfAd"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="namePet">
              Name pet
            </InputLabel>
            <StyledInput
              id="namePet"
              name="namePet"
              placeholder="Type name pet"
              autoComplete="off"
            />
            <ErrorMessage
              name="namePet"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="birthDate">
              Date of birth
            </InputLabel>
            <StyledInput
              id="birthDate"
              name="birthDate"
              placeholder="Type date of birth"
              autoComplete="off"
            />
            <ErrorMessage
              name="birthDate"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel type="text" htmlFor="breed">
              Breed
            </InputLabel>
            <StyledInput
              id="breed"
              name="breed"
              placeholder="Type breed"
              autoComplete="off"
            />
            <ErrorMessage
              name="breed"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <MainBtnsWrapper>
            <MainNoticeBtn isBgOrange type="submit">
              Next
            </MainNoticeBtn>
            <MainNoticeBtn onClick={closeModal} type="button">
              Cancel
            </MainNoticeBtn>
          </MainBtnsWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default FirstStep;
