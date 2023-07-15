'use client';

import { useState } from 'react';

import { CloseIcon } from '@/components/Icons';
import { Modal } from '@/components/Modal';

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
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-5 pb-8">
        <h2 className=" text-center text-2xl font-bold text-gray-200">
          Composition Pattern
        </h2>

        <button
          className="max-w-xs rounded-md bg-green-500 px-4 py-1 text-white"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      </div>

      <Modal.Root isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title>Important Content</Modal.Title>
          <Modal.Action onClick={handleCloseModal}>
            <CloseIcon className="text-lg text-gray-500" />
          </Modal.Action>
        </Modal.Header>
        <Modal.Content>
          <h2 className="text-gray-800">IMPORTANT CONTENT</h2>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
