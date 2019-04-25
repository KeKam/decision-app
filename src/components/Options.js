import React from 'react';
import Option from './Option';

const Options = ({ options, handleDeleteOption }) => (
  <div>
    <div>
      <h3>Your Options</h3>
    </div>
    {options.length === 0 && <p>Please add a option to get started</p>}
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

export default Options;