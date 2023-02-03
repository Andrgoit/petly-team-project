import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';

import { customStyles } from 'components/ModalNotice/ModalNotice.styled';
import ModalCloseBtn from 'components/ModalCloseBtn/ModalCloseBtn';
import { Title } from './ModalAddNotice.styled';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const initialValues = {
  category: '',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: '',
  location: '',
  price: '',
  avatar: null,
  comments: '',
};

const ModalAddNotice = ({ isModalOpen, setIsModalOpen }) => {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [formValues, setFormValues] = useState(initialValues);

  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <Modal
      shouldCloseOnEsc
      ariaHideApp={false}
      isOpen={isModalOpen}
      style={{
        ...customStyles,

        content: isTablet
          ? {
              ...customStyles.content,
              width: '608px',
              padding: '0 80px',
            }
          : { ...customStyles.content },
      }}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <ModalCloseBtn closeModal={() => setIsModalOpen(false)} />
      <Title>Add pet</Title>
      {isFirstStep ? (
        <FirstStep
          formValues={formValues}
          setFormValues={setFormValues}
          setIsFirstStep={setIsFirstStep}
          closeModal={() => setIsModalOpen(false)}
        ></FirstStep>
      ) : (
        <SecondStep
          goBack={() => setIsFirstStep(true)}
          setFormValues={setFormValues}
          formValues={formValues}
          closeModal={() => setIsModalOpen(false)}
          setIsFirstStep={setIsFirstStep}
          initialValues={initialValues}
        ></SecondStep>
      )}
    </Modal>
  );
};

export default ModalAddNotice;
