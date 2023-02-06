import ModalAddsPet from '../../components/ModalAddsPet/ModalAddsPet';

import { useState } from 'react';

export default function AuthForm({ children }) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(true);
  };
  return (
    <div>
      <button onClick={onClose}>Add pet</button>
      {showModal && <ModalAddsPet setShowModal={setShowModal} />}
      {children}
    </div>
  );
}
