import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Board from './board.js';
import Input from './input.js';
// import WordList from './word-list.js';
import store from '../store/store.js';

@observer
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      backspace: false
    }
  }

  componentWillMount() {
    store.getActiveBoard();
  }
  //
  // captureBackspace = (keyCode) => {
  //   console.log(keyCode)
  //   if (keyCode === 8) {
  //     this.setState({ backspace: true })
  //   }
  //   else {
  //     this.setState({ backspace: false })
  //   }
  // };

  handleChange = (value, keycode) => {
    console.log(value, keycode);
    store.processInput(value, keycode);
  };

  handleSubmit = (value) => {
    console.log(value);
  };

	render() {
		return(
      <div className="main">
        <h1> Boggle! </h1>
        <Board board={store.activeBoard} validWordIndeces={store.validWordIndeces}/>
        <Input
          userInput={store.userInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
	}
}