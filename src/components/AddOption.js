import React, { useState } from 'react';

const AddOption = ({ handleAddOptions }) => {
  const [ error, setError ] = useState(undefined);

  const handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = handleAddOptions(option);

    setError(error);

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  return (
    <div>
      {error && <p className='add-option-error'>{error}</p>}
      <form className='add-option' onSubmit={handleAddOption}>
        <input className='add-option-input' type='text' aria-label='Input option here' name='option' />
        <button className='button'>Add Option</button>
      </form>
    </div>
  );
}

export default AddOption;