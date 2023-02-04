import { Text, AddBtn, Wrapper, IconAdd } from './AddNoticeButton.styled';

export const AddNoticeButton = () => {
    return (
    <Wrapper>
      <Text>Add pet</Text>
      <AddBtn>
        <IconAdd />
      </AddBtn>
      {/* {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          {<NoticeModal onCloseModal={closeModal} />}
        </Modal>
      )} */}
    </Wrapper>
  );
};

export default AddNoticeButton;
