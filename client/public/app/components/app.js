import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Board from './board.js';
import Input from './input.js';
// import WordList from './word-list.js';
import store from '../store/store.js';

@observer
export default class App extends Component {

  componentWillMount() {

  }

  handleChange = (value) => {
    store.userInput = value;
  }

  handleSubmit = (value) => {
    console.log(value);
  }

	render() {
    console.log(store.board);
		return(
      <div className="main">
        <h1> Boggle! </h1>
        <Board board={store.board} />
        <Input
          userInput={store.userInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
	}
}