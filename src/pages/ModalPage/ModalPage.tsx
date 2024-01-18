import { Button, Modal } from '@/ui-kit';
import { useState } from 'react';

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <p>Modal</p>
      <Button onClick={openModal}>Open modal</Button>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n'
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i
        </Modal.Content>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalPage