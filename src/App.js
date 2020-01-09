import React, { Component } from 'react'; 
import './App.css';
import Square from './components/base.js';
import Link from './components/link.js';
import Card from './components/card.js';
import './logo.svg'

const gitLink = <a href="https://github.com/jayesh365"><Link link="fab fa-github" linkId="git-icon"/></a>
const linkedLink = <a href="https://www.linkedin.com/in/jayeshkhullar"><Link link="fab fa-linkedin" linkId="linked-icon"/></a>
const mailLink = <a href="mailto:jayesh.khullar@mail.utoronto.ca"><Link link="fas fa-envelope" linkId="mail-icon"/></a>
const stackLink = <a href="resume.pdf"><Link link="fas fa-file-alt" linkId="stack-icon"/></a>
const cardsOne = [
  <Card
  id="houseHunter"
  card="gitCard"
  cardTitle="House Hunter Python Web Scraper"
  cardContent="House Hunter scrapes Kijiji to find houses for rent."
  />,
  <Card
  id="mrai"
  card="gitCard"
  cardTitle="MR-Ai"
  cardContent="A web app for detecting brain tumors using AI."
  />, 
  <Card
  id="ocr"
  card="gitCard"
  cardTitle="PDF-Image and OCR"
  cardContent="Program to find text fields in pdf and convert to image for OCR to read."
  />,
  <Card
  id="pythonCalc"
  card="gitCard"
  cardTitle="Python Percentage Calculator"
  cardContent="Program to calculate: What you need on your final exam, and What your average is for your completed assignments."
  />]

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <div id="nav-bar">
          <div id="icons">
            {gitLink}
            {linkedLink}
            {mailLink}
            {stackLink}
          </div>
        </div>

        <div id="home">
        <Square
        pageName="pageOne"
        divName="homeDiv"
        title="Jayesh Khullar" 
        blurb="Hey!&nbsp;
        I am a Machine Learning and Data Mining student at UofT Scarborough.&nbsp;
        I am currently working on projects using Python, Go, and ReactJS."
        
        />
        </div>
        <div id="projects">
        <Square
        pageName="pageTwo"
        title="Projects" 
        divName="githubCards"
        blurb="Here are some of my previous projects available on my Github..."
        />
        <div id="cards">
          {cardsOne}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
