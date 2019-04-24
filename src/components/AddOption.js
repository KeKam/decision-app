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
      {error && <p>{error}</p>}
      <form onSubmit={handleAddOption}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
}

export default AddOption;