import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Board from './board.js';
import Input from './input.js';
// import WordList from './word-list.js';
import store from '../store/store.js';

@observer
export default class App extends Component {

  componentWillMount() {
    store.getActiveBoard();
  }

  handleChange = (value) => {
    store.processInput(value);
  }

  handleSubmit = (value) => {
    console.log(value);
  }

	render() {
    console.log(store.activeBoard);
		return(
      <div className="main">
        <h1> Boggle! </h1>
        <Board board={store.activeBoard} />
        <Input
          userInput={store.userInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
	}
}