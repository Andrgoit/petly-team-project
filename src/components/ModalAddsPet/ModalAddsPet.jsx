import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createPortal } from 'react-dom';
import { addPet } from '../../redux/user/pets/petOperations';

import ModalStepOne from './ModalStep/ModalStepOne';
import ModalStepTwo from './ModalStep/ModalStepTwo';
import { GrClose } from 'react-icons/gr';

import {
  ModalOverlay,
  ModalContent,
  TitleModal,
  IconClose,
  Icon,
} from './ModalAddsPet.styled';

const modalRoot = document.getElementById('modal-root');

export default function ModalAddsPet({ setShowModal }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    breed: '',
    avatar: '',
    comments: '',
  });
  const [page, setPage] = useState(0);

  const FormTitles = ['First page', 'Second page'];

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  const onBackdropClose = e => {
    if (e.currentTarget === e.target) setShowModal(false);
  };

  const fetchPets = form => {
    console.log(form);
    dispatch(addPet({ form }));
  };

  const onClose = () => {
    setShowModal(false);
  };

  const handleNextStep = async (newData, final = false) => {
    setFormData(prev => (prev = newData));
    setPage(prev => prev + 1);

    if (final) {
      try {
        console.log(newData);
        await fetchPets(newData);
        onClose();
        return;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePrevStep = newData => {
    setFormData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev - 1);
  };

  const steps = [
    <ModalStepOne
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      title={FormTitles[page]}
    />,
    <ModalStepTwo
      prev={handlePrevStep}
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      title={FormTitles[page]}
    />,
  ];

  return createPortal(
    <ModalOverlay onClick={onBackdropClose}>
      <ModalContent>
        <TitleModal>Add pet</TitleModal>
        <IconClose type="button" onClick={e => onClose(e)}>
          <GrClose />
        </IconClose>
        {steps[page]}
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
}
