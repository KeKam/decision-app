import React, { useEffect } from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => {
  
  useEffect(() => {
    Modal.setAppElement('body');
  });
  
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClearSelectedOption}
      contentLabel='Selected Option'
      closeTimeoutMS={200}
    >
      <h3>Selected Option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleClearSelectedOption}>Okay</button>
    </Modal>
  );
}

export default OptionModal;