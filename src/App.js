import React, { Component } from 'react';
import wordsData from './words.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: wordsData,
      currentName: 'Benedict Cumberbatch'
    };
    this.checkName = this.checkName.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  randomize(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  checkName(e) {
    document.getElementsByTagName('p')[0].style.opacity = '0';
    var data = {
      givenPart1: this.state.words.givenPart1,
      givenPart2: this.state.words.givenPart2,
      surnamePart1: this.state.words.surnamePart1,
      surnamePart2: this.state.words.surnamePart2
    }
    var name = this.randomize(data.givenPart1) + this.randomize(data.givenPart2);
    var surname = this.randomize(data.surnamePart1) + this.randomize(data.surnamePart2);
    setTimeout(
      function() {
          this.setState({currentName: `${name} ${surname}`});
      }
      .bind(this),
      300
    );
    setTimeout(
      function() {
          document.getElementsByTagName('p')[0].style.opacity = '1';
      }, 300
    );
  }

  render() {
    return (
      <div className="App">
        <img src="https://i.imgur.com/npYk9CA.png" alt="Benedict" />
        <h1>Forgot his name?</h1>
        <p>{ this.state.currentName }</p>
        <br />
        <a href={null} className="button" onClick={ this.checkName }>
          What is his name again?
        </a>
      </div>
    );
  }
}

export default App;
