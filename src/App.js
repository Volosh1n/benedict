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
    this.handleClick = this.handleClick.bind(this);
    this.randomize = this.randomize.bind(this);
  }

  randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  handleClick(e) {
    var data = {
      givenPart1: this.state.words.givenPart1,
      givenPart2: this.state.words.givenPart2,
      surnamePart1: this.state.words.surnamePart1,
      surnamePart2: this.state.words.surnamePart2
    }
    var name = this.randomize(data.givenPart1) + this.randomize(data.givenPart2);
    var surname = this.randomize(data.surnamePart1) + this.randomize(data.surnamePart2);
    this.setState({currentName: `${name} ${surname}`});
  }

  render() {
    return (
      <div className="App">
        <img src="https://i.imgur.com/npYk9CA.png" alt="Benedict" />
        <h1>Forgot his name?</h1>
        <p>{ this.state.currentName }</p>
        <br />
        <a href={null} className="button" onClick={ this.handleClick }>
          What is his name again?
        </a>
      </div>
    );
  }
}

export default App;
