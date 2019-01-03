import React, { Component } from 'react';
import ButtonCounter from './ButtonCounter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ButtonCounter />
        </header>
      </div>
    );
  }
}

export default App;
