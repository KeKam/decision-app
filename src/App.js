import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Options from './components/Options';
import OptionModal from './components/OptionModal';

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
        <Helmet>
          <title>Decisions</title>
          <meta name='description' content='Random decisions app' />
          <link rel="canonical" href='https://protected-depths-31048.herokuapp.com/' />
        </Helmet>
        <Header />
        <div className='container'>
          <Action 
            hasOptions={options.length > 0}
            handleOption={handleOption}
          />
          <div className='widget'>
            <Options 
              options={options} 
              handleDeleteOption={handleDeleteOption}
              handleDeleteAll={handleDeleteAll}
            />
            <AddOption handleAddOptions={handleAddOptions} />
          </div>
          <OptionModal 
            selectedOption={selectedOption}
            handleClearSelectedOption={handleClearSelectedOption}
          />
        </div>
      </div>
    );
}

export default App;
