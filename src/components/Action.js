import React from 'react';

const Action = ({ handleOption, hasOptions }) => {
  return (
    <div>
      <button
        className='main-button'
        onClick={handleOption}
        disabled={!hasOptions}
      >
        What to do?
      </button>
    </div>
  );
}

export default Action;