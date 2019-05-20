import React, { Component } from 'react'; 
import './App.css';
import Square from './components/base.js';
import Link from './components/link.js';
import './logo.svg'

const gitLink = <a href="https://github.com/jayesh365"><Link link="fab fa-github" linkId="git-icon"/></a>
const linkedLink = <a href="https://www.linkedin.com/in/jayeshkhullar"><Link link="fab fa-linkedin" linkId="linked-icon"/></a>
const mailLink = <a href="mailto:jayesh.khullar@mail.utoronto.ca"><Link link="fas fa-envelope" linkId="mail-icon"/></a>
const stackLink = <a href="https://stackoverflow.com/users/4839739/jayesh-khullar"><Link link="fab fa-stack-overflow" linkId="stack-icon"/></a>

class App extends Component {

  render() {
    return (
      <div className="App">
        <Square
        linksOne={gitLink}
        linksTwo={linkedLink}
        linksThree={mailLink}
        linksFour={stackLink}
        src='takephoto.jpg'
        title="Jayesh Khullar" 
        blurb="Hey!
        I am a Machine Learning and Data Mining student at UoftT Scarborough. 
        I am currently working on projects using Python, Go, and ReactJS."
        />
      </div>
    );
  }
}

export default App;
