import React from 'react';
import Option from './Option';

const Options = ({ options, handleDeleteOption, handleDeleteAll }) => {
  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-title'>Your Options</h3>
        <button 
          className='button button-link'
          onClick={handleDeleteAll}
        >
          Remove All
        </button>
      </div>
      {options.length === 0 && <p className='widget-message'>Please add a option to get started</p>}
      {options.map((option, index) => (
        <Option 
          key={option}
          option={option}
          count={index + 1}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
    </div>
  );
}

export default Options;