import React, { Component } from 'react'; 
import './App.css';
import Square from './components/base.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Square content="Hello Test!"/>
      </div>
    );
  }
}

export default App;
