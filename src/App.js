import React, { Component } from 'react';
import UofT from './uoft.svg'
import $ from 'jquery';
import './App.css';

$(document).ready(function () {

  $(".About-header").mouseenter(function(){
    $('#aboutBlurb').toggle(600);
  });

  $(".About-header").mouseleave(function(){
    $('#aboutBlurb').toggle(600);
  });

  // toggle the flat line and down arrow
  $('.flatLine').mouseover(function () {
    $('.downArrow').toggle();
    $('.flatLine').toggle();
  });

  $('.downArrow').mouseout(function () {
    $('.downArrow').toggle();
    $('.flatLine').toggle();
  });

});

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="jay">JK</h1>
          <a href="#uoft">
            <img className="flatLine" src="https://img.icons8.com/ios/100/000000/horizontal-line-filled.png" alt="flat-line"></img>
            <img className="downArrow" src="https://img.icons8.com/android/96/000000/chevron-down.png" alt="down-arrow"></img>
          </a>
        </header>
        <header className="About-header">
          <div className="container">
            <img id="uoft" src={UofT} alt="uoft-logo" />
          </div>
          <p id="aboutBlurb">
            Hey! I am a Machine Learning and Data Mining student at UofT Scarborough

            who is an avid learner currently on

            an internship as a Software Developer.

            As of now, I am working on projects using Python,

            HTML5, CSS3, and C++,
            with a bit of Photoshop,

            and Illustrator.
        </p>
          <img className="flatLine" src="https://img.icons8.com/ios/100/000000/horizontal-line-filled.png" alt="flat-line"></img>
          <img className="downArrow" src="https://img.icons8.com/android/96/000000/chevron-down.png" alt="down-arrow" />
        </header>
      </div>
    );
  }
}

export default App;
