import React, { useState} from 'react';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';
import OptionModal from './components/OptionModal';
import './App.css';

const App = () => {
  const [ options, setOptions ] = useState([]);
  const [ selectedOption, setSelectedOption ] = useState(undefined);

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

    return (
      <div>
        <Header />
        <Action 
          hasOptions={options.length > 0}
          handleOption={handleOption}
        />
        <Options options={options} />
        <AddOption handleAddOptions={handleAddOptions} />
        <OptionModal 
          selectedOption={selectedOption}
          handleClearSelectedOption={handleClearSelectedOption}
        />
      </div>
    );
}

export default App;
