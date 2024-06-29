import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, message }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="modal-content"
    overlayClassName="modal-overlay"
  >
    <h2>{message}</h2>
    <button onClick={onConfirm}>Yes</button>
    <button onClick={onRequestClose}>No</button>
  </Modal>
);

export default ConfirmationModal;
