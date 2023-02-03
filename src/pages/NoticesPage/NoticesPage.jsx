import { useState } from 'react';
import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
const NoticesPage = () => {
  const [isOpenAddNoticeModal, setIsOpenAddNoticeModal] = useState(false);

  return (
    <>
      <AddNoticeButton onClickOpen={() => setIsOpenAddNoticeModal(true)} />
      <ModalAddNotice
        isModalOpen={isOpenAddNoticeModal}
        setIsModalOpen={setIsOpenAddNoticeModal}
      />
    </>
  );
};

export default NoticesPage;
