import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectUserPets } from '../../redux/auth/authSelectors';

import { TfiPlus } from 'react-icons/tfi';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import PetsList from '../PetsList/PetsList';
import {
  PetsTitle,
  ButtonWrapper,
  ButtonTitle,
  AddButton,
  Wrapper,
  Pictures,
  StyledButtonSection,
} from './PetsData.styled';

function PetsData() {
  const [showModal, setShowModal] = useState(false);
  const pets = useSelector(selectUserPets);
  const petsLeng = pets.length;

  const onClose = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      <StyledButtonSection>
        <PetsTitle>My pets:</PetsTitle>
        <ButtonWrapper>
          <ButtonTitle>Add pet</ButtonTitle>
          <AddButton onClick={onClose}>
            <TfiPlus color="white" />
          </AddButton>
        </ButtonWrapper>
      </StyledButtonSection>

      {showModal && <ModalAddsPet setShowModal={setShowModal} />}
      {petsLeng > 0 ? (
        <PetsList pets={pets} />
      ) : (
        <Pictures>You don't have any pets added.</Pictures>
      )}
    </Wrapper>
  );
}

export default PetsData;
