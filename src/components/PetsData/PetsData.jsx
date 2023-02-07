import { useState } from 'react';
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

function PetsData({ pets, element }) {
  const [showModal, setShowModal] = useState(false);

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
      {/* <PetsList pets={pets} /> */}
      {showModal && <ModalAddsPet setShowModal={setShowModal} />}
      {!element ? (
        <Pictures>You don't have any pets added.</Pictures>
      ) : (
        <PetsList pets={pets} />
      )}
    </Wrapper>
  );
}

export default PetsData;
