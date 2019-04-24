import React from 'react';

const Action = ({ handleOption, hasOptions }) => (
  <div>
    <button
      onClick={handleOption}
      disabled={!hasOptions}
    >
      What to do?
    </button>
  </div>
);

export default Action;