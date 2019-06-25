import React from 'react';

const Option = ({ count, option, handleDeleteOption}) => {
  return (
    <div className='option'>
      <p className='option-text'>{count}. {option}</p>
      <button 
        className='button button-link'
        onClick={(e) => {
          handleDeleteOption(option)
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Option;