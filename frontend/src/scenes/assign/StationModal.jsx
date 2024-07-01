import React from 'react';
import Modal from 'react-modal';

const StationModal = ({ isOpen, closeModal, selectedStation, handleDeleteAssignment }) => {
  const modalContentStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px'
  };

  const deleteButtonStyle = {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer'
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel={`Station ${selectedStation?.id}`}
    >
      <div style={modalContentStyle}>
        <h2>Station {selectedStation?.id}</h2>
        <p>{selectedStation?.assigned ? `Assigned to ${selectedStation?.employee.name}` : 'Unassigned'}</p>
        {selectedStation?.assigned && (
          <button
            style={deleteButtonStyle}
            onClick={() => handleDeleteAssignment(selectedStation.id)}
          >
            Delete Assignment
          </button>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default StationModal;
