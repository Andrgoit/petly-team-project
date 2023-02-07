import { Formik, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Label,
  TextModal,
  LabelPhoto,
  ImgPhoto,
  BtnPhoto,
  Textarea,
  CentredTextarea,
  InputFile,
  ButtonGroup,
  ButtonDone,
  ButtonBack,
  MsgError,
} from './ModalStep.styled';

const validationSchema = yup.object({
  image: yup
    .mixed()
    .required('Image is Required! Example: jpg,jpeg,png')
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),

  comments: yup
    .string()
    .min(8)
    .max(120)
    .matches(/\D/g, 'Only alphabetic characters and symbols are allowed')
    .required(),
});
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export default function ModalStepTwo({ next, data, setFormData, prev }) {
  const [fileInput, setFileInput] = useState(data.avatar);

  const handleSubmit = values => {
    next({ ...values, avatar: fileInput }, true);
  };

  const selectFile = (e, setFieldValue) => {
    const [file] = e.target.files;

    if (file) {
      setFileInput(file);
      setFieldValue('image', file);
      setFormData(values => ({ ...values, avatar: file }));
    }
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => (
        <Form autoComplete="on">
          <TextModal>Add photo and some comments</TextModal>
          <LabelPhoto>
            {fileInput ? (
              <ImgPhoto
                src={URL.createObjectURL(fileInput)}
                alt={fileInput.name}
              />
            ) : (
              <BtnPhoto type="button">{<AiOutlinePlus size="40" />}</BtnPhoto>
            )}
            <InputFile
              type="file"
              id="image"
              name="avatar"
              accept=".jpg,.png"
              onChange={e => selectFile(e, setFieldValue)}
            />
          </LabelPhoto>
          <ErrorMessage name="image" render={msg => <MsgError>{msg}</MsgError>} />
          <CentredTextarea>
            <Label>Comments</Label>
            <Textarea
              component="textarea"
              name="comments"
              placeholder="Type comments"
            ></Textarea>
            <ErrorMessage name="comments" render={msg => <MsgError>{msg}</MsgError>} />
          </CentredTextarea>
          <ButtonGroup>
            <ButtonBack type="button" onClick={prev}>
              Back
            </ButtonBack>
            <ButtonDone type="submit">Done</ButtonDone>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
}
