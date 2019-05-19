import React, { Component } from 'react'; 
import './App.css';
import Square from './components/base.js';
import './logo.svg'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Square 
        src='takephoto.jpg'
        title="Jayesh Khullar" 
        blurb="Hey!
        I am a Machine Learning and Data Mining student at UoftT Scarborough. 
        I am currently working on projects using Python, Java, Go, C++."
        />
      </div>
    );
  }
}

export default App;
