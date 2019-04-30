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
      className='modal'
    >
      <h3 className='modal-title'>Selected Option</h3>
      {selectedOption && <p className='modal-body'>{selectedOption}</p>}
      <button className='button' onClick={handleClearSelectedOption}>Okay</button>
    </Modal>
  );
}

export default OptionModal;