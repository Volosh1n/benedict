import React, { Component } from 'react';
import wordsData from './words.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: wordsData,
      currentName: 'Benedict Cumberbatch'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var givenPart1 = this.state.words.givenPart1;
    var givenPart2 = this.state.words.givenPart2;
    var surnamePart1 = this.state.words.surnamePart1;
    var surnamePart2 = this.state.words.surnamePart2;
    var name = givenPart1[Math.floor(Math.random() * givenPart1.length)] +
               givenPart2[Math.floor(Math.random() * givenPart2.length)];
    var surname = surnamePart1[Math.floor(Math.random() * surnamePart1.length)] +
                  surnamePart2[Math.floor(Math.random() * surnamePart2.length)];
    this.setState({currentName: `${name} ${surname}`});
  }
  render() {
    return (
      <div>
        <p>{ this.state.currentName }</p>
        <button onClick={ this.handleClick }>
          What is his name again?
        </button>
      </div>
    );
  }
}

export default App;
