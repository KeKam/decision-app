import React, { useState } from 'react';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Options from './components/Options';
import './App.css';

const App = () => {
  const [ options, setOptions ] = useState([]);

  const handleAddOptions = (option) => {
    if(!option) {
      return 'Enter a valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    setOptions(options.concat(option));
  };

    return (
      <div>
        <Header />
        <Options options={options} />
        <AddOption handleAddOptions={handleAddOptions} />
      </div>
    );
}

export default App;
