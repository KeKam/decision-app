import React, { useState } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import './App.css';

const App = () => {
  const [ options ] = useState([]);

    return (
      <div>
        <Header />
        <Options options={options} />
      </div>
    );
}

export default App;
