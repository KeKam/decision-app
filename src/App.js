import React, { useState, useEffect } from 'react';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';
import OptionModal from './components/OptionModal';
import './App.css';

const App = () => {
  const [ options, setOptions ] = useState([]);
  const [ selectedOption, setSelectedOption ] = useState(undefined);

  useEffect(() => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        setOptions(options || []);
      }
    } catch (error) {
      console.log(error); 
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(options);
    localStorage.setItem('options', json);
  }, [options]);

  const handleAddOptions = (option) => {
    if(!option) {
      return 'Enter a valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    setOptions(options.concat(option));
  };

  const handleOption = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];

    setSelectedOption(option);
  };

  const handleClearSelectedOption = () => {
    setSelectedOption(undefined);
  };

  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => optionToRemove !== option))
  };

  const handleDeleteAll = () => {
    setOptions([]);
  };

    return (
      <div>
        <Header />
        <Action 
          hasOptions={options.length > 0}
          handleOption={handleOption}
        />
        <Options 
          options={options} 
          handleDeleteOption={handleDeleteOption}
          handleDeleteAll={handleDeleteAll}
        />
        <AddOption handleAddOptions={handleAddOptions} />
        <OptionModal 
          selectedOption={selectedOption}
          handleClearSelectedOption={handleClearSelectedOption}
        />
      </div>
    );
}

export default App;
