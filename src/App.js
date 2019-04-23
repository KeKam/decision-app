import React, { Component } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import './App.css';

class App extends Component {
  state = {
    options: [ 'climbing' ]
  };

  render() {
    return (
      <div>
        <Header />
        <Options options={this.state.options} />
      </div>
    );
  }
}

export default App;
