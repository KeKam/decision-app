import React from 'react';

const Option = ({ count, option, handleDeleteOption}) => (
  <div>
    <p>{count}. {option}</p>
    <button onClick={(e) => {
      handleDeleteOption(option)
    }}
    >
      Remove
    </button>
  </div>
);

export default Option;