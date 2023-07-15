'use client';

import { useState } from 'react';

import { Modal } from '@/components/ModalWrong';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex w-full justify-center pb-8">
        <h2 className="text-2xl font-bold">Apropcalypse</h2>
      </div>

      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} hasActions>
        <h2>Important Content</h2>
      </Modal>
    </>
  );
}
