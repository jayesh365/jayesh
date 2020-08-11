import React, { Component } from 'react'; 
import './App.css';
import Square from './components/base.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Square
        blurb="Site Under Construction."
        />

      </div>
    );
  }
}

export default App;
