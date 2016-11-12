import { observable, computed } from 'mobx';
import { getRandom } from '../utils.js';

class BoggleStore {
	constructor() {
		this.possibleDice = [
			['R', 'I', 'F', 'O', 'B', 'X'],['I', 'F', 'E', 'H', 'E', 'Y'],['D', 'E', 'N', 'O', 'W', 'S'],['U', 'T', 'O', 'K', 'N', 'D'],
			['H', 'M', 'S', 'R', 'A', 'O'],['L', 'U', 'P', 'E', 'T', 'S'],['A', 'C', 'I', 'T', 'O', 'A'],['Y', 'L', 'G', 'K', 'U', 'E'],
			['Qu', 'B', 'M', 'J', 'O', 'A'],['E', 'H', 'I', 'S', 'P', 'N'],['V', 'E', 'T', 'I', 'G', 'N'],['B', 'A', 'L', 'I', 'Y', 'T'],
			['E', 'Z', 'A', 'V', 'N', 'D'],['R', 'A', 'L', 'E', 'S', 'C'],['U', 'W', 'I', 'L', 'R', 'G'],['P', 'A', 'C', 'E', 'M', 'D']
			];
    this.justLetters = [];
    this.priorNeighbors = [];
	}

  @observable activeBoard = [];
  @observable userInput = '';
  @observable priorNeighbors = null;
  @observable validWordIndeces = [];
  rollTheDice(dice) {
    let j = 0,
        temp = null;
    for (let i = 0; i < dice.length; i++) {
      j = getRandom(0, 15);
      temp = dice[i];
      dice[i] = dice[j];
      dice[j] = temp
    }
    return dice;
  }
  getActiveBoard() {
  	this.activeBoard = this.rollTheDice(this.possibleDice).map((die, i) => {
      const letter = die[getRandom(0, 6)];
  		let neighbors = [i-5, i-4, i-3, i-1, i+1, i+3, i+4, i+5].filter((i) => (i >=0 && i <= 15));
	  	if (i % 4 === 0) {
	  		neighbors = neighbors.filter(i => ((i + 1) % 4 !== 0));
	  	}
	  	if ((i+1) % 4 === 0) {
	  		neighbors = neighbors.filter(i => (i % 4 !== 0));
	  	}
	  	this.justLetters.push(letter);
  		return {letter, neighbors, active: false}
  	})
  }

  getCurrentIndeces(value) {
    let indeces = [];
    this.justLetters.forEach((letter, i) => {
      if (value === letter) {
        indeces.push(i);
      }
    });
    return indeces;
  }

  checkIfNeighbors(index, priorNeighbors = this.priorNeighbors) {
    let isNeighbor = false;
    priorNeighbors.forEach(neighborObj => {
      if (neighborObj.neighbors.includes(index)) {
        isNeighbor = true;
      }
      else if (!neighborObj.neighbors.includes(index) && !this.validWordIndeces.includes(neighborObj.boardIndex)) {
        this.activeBoard[neighborObj.boardIndex].active = false;
      }
    });
    return isNeighbor;
  }

  //make two diff functions, one for just changing input (onChange)
  //other is for the work of processing higlighting and stuff (onKeyUp)
  buildWord(value, backspace = false) {
    const currentLetter = userInput[userInput.length - 1];
    const currentIndeces = this.getCurrentIndeces(currentLetter);
    let newNeighbors = [];

    if (backspace) {
      this.validWordIndeces.pop();
      currentIndeces.forEach((index) => {
        this.activeBoard[index].active = false;
      });
      this.processInput(userInput.slice(0, userInput.length-1));
    }

    currentIndeces.forEach((ind) => {
      const neighbors = this.activeBoard[ind].neighbors;
      newNeighbors = [...newNeighbors, {boardIndex: ind, neighbors}];
      if (userInput.length === 1 || this.checkIfNeighbors(ind)) {
        this.activeBoard[ind].active = true;
        this.validWordIndeces.push(ind);
      }
    });
    this.priorNeighbors = newNeighbors;
  }
  processInput(value) {
    this.userInput = value.toUpperCase();
  }
}

const store = new BoggleStore;

export default store;