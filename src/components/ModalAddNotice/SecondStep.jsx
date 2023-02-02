import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  SexIcon,
  SexLabel,
  SexRadioBtn,
  LegendText,
  FieldSet,
  StyledForm,
  StyledInput,
  InputLabel,
  InputWrapper,
  TextArea,
  FileInput,
  ImgWrapper,
  MainBtnsWrapper,
  MainNoticeBtn,
  SexText,
  PetImage,
  StyledErrMsg,
} from './ModalAddNotice.styled';
import { ReactComponent as PlusImg } from '../../img/add-file.svg';

const validationSchema = yup.object({
  sex: yup.string().required('Field is required!'),
  location: yup
    .string()
    .min(2)
    .max(36)
    .matches(/\D/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  price: yup
    .string()
    .min(2)
    .max(6)
    .matches(/^[1-9]+[0-9]*\$$/g, 'Only number characters and $ are allowed')
    .notRequired(),
  image: yup
    .mixed()
    .required('Image is Required!(jpg,jpeg,png)')
    .test(
      'fileFormat',
      'Only .jpg, .jpeg, .png',
      value =>
        value === null ||
        (value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type))
    ),
  comment: yup
    .string()
    .min(4)
    .max(120)
    .matches(/^\D*$/g, 'Only alphabetic characters and symbols are allowed')
    .required('Field is required!'),
});

const SecondStep = ({ goBack, setFormValues, formValues, closeModal }) => {
  const [file, setFile] = useState();

  const handleFileChange = (e, setFieldValue) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      setFile(imgFile);
    }
    setFieldValue('image', imgFile);
    setFormValues(values => ({ ...values, image: imgFile }));
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formValues}
      onSubmit={values => {
        console.log(values);
        closeModal();
      }}
    >
      {({ setFieldValue }) => (
        <StyledForm>
          <FieldSet>
            <LegendText>The sex*:</LegendText>
            <SexLabel htmlFor="male">
              <SexRadioBtn
                type="radio"
                id="male"
                name="sex"
                alt="male"
                value="male"
              />
              <SexIcon></SexIcon>
              <SexText>Male</SexText>
            </SexLabel>

            <SexLabel htmlFor="female">
              <SexRadioBtn
                type="radio"
                id="female"
                name="sex"
                alt="female"
                value="female"
              />
              <SexIcon isFemale></SexIcon>
              <SexText>Female</SexText>
            </SexLabel>
            <ErrorMessage
              name="sex"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </FieldSet>

          <InputWrapper>
            <InputLabel htmlFor="location" type="text">
              Location*:
            </InputLabel>
            <StyledInput
              id="location"
              name="location"
              placeholder="Type location"
              autoComplete="off"
            />
            <ErrorMessage
              name="location"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          {formValues.category === 'sell' && (
            <InputWrapper>
              <InputLabel htmlFor="price" type="text">
                Price*:
              </InputLabel>
              <StyledInput
                id="price"
                name="price"
                placeholder="Type price"
                autoComplete="off"
              />
              <ErrorMessage
                name="price"
                render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
              />
            </InputWrapper>
          )}

          <InputWrapper imgWrap>
            <InputLabel htmlFor="image">Load the pet’s image</InputLabel>
            <ImgWrapper>
              {file ? (
                <PetImage alt="pet-image" src={URL.createObjectURL(file)} />
              ) : (
                <PlusImg />
              )}

              <FileInput
                id="image"
                name="image"
                type="file"
                onChange={e => handleFileChange(e, setFieldValue)}
              />
            </ImgWrapper>
            <ErrorMessage
              name="image"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel htmlFor="comments" type="text">
              Comments
            </InputLabel>
            <TextArea
              component="textarea"
              id="comment"
              name="comment"
              rows="3"
              placeholder="Type comments"
              autoComplete="off"
            />
            <ErrorMessage
              name="comment"
              render={msg => <StyledErrMsg>{msg}</StyledErrMsg>}
            />
          </InputWrapper>
          <MainBtnsWrapper>
            <MainNoticeBtn type="submit" isBgOrange>
              Done
            </MainNoticeBtn>
            <MainNoticeBtn onClick={goBack} type="button">
              Back
            </MainNoticeBtn>
          </MainBtnsWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SecondStep;
