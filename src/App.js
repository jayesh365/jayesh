import React, { Component } from 'react';
import './App.css';
import Square from './components/base.js';
import Links from './components/links.js';


function toggle() {

  var element = document.body;

  element.classList.toggle("dark-theme");

}

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className='nav'>

          <div className='nav-title'>
            <h1>Jayesh Khullar</h1>
          </div>

          <div className="nav-btn">
            <button variant="light" className='dm-btn' onClick={toggle}>
              &#9728;
            </button>
          </div>

        </div>

        <Square
          pageName='pageOne'
          pic="./me.png"
          divName="homeDiv"
          title="About Me"
          blurb=" Third year Machine Learning and Data Mining student at the University of Toronto Scarborough actively searching for a co-op position. I am
                    thrilled to apply my passion and programming experience to analyze, design, and develop the most advanced software."
        />


        <Square
          pageName='pageTwo'
          pic="./uhn.jpg"
          divName="expDiv"
          title="Most Recent Experience"
          blurb="Worked in a team of four Software Developers to design and implement solutions to data centric problems
            Worked both in a Kanban environment to develop web apps for clinical research and individually to create various tools for department
            use and to support the web apps"
        />

        <Links
          pic1='./git.svg'
          linkURL1='https://github.com/jayesh365'
          pic2='./email.svg'
          linkURL2='jayesh.khullar@mail.utoronto.ca'
          pic3='./in.svg'
          linkURL3='https://www.linkedin.com/in/jayeshkhullar'
          pic4='./resume.svg'
          linkURL4='./resume.pdf'
        />

      </div>
    );
  }
}
export default App;
