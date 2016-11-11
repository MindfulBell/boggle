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
	}

  @observable activeBoard = [];
  @observable userInput = '';
  @observable priorIndex = null;
  @observable validWordIndeces = [];
  rollTheDice() {
    let numDice = 15;
    let usedIndeces = [];
    let rolledDice = [];
    while (numDice >= 0) {
      let randIndex;
      do {
        randIndex = getRandom(0, 15);
      }
      while (usedIndeces.includes(randIndex));
      rolledDice.push(this.possibleDice[randIndex]);
      usedIndeces.push(randIndex);
      numDice--;
    }
    return rolledDice;
  }
  getActiveBoard() {
  	this.activeBoard = this.rollTheDice().map((die, i) => {
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

  // getCurrentIndeces(value) {
  //   let indeces = [];
  //   this.justLetters.forEach((letter, i) => {
  //     if (value === letter) {
  //       indeces.push(i);
  //     }
  //   });
  //   return indeces;
  // }

  processInput(value) {
    const userInput = this.userInput = value.toUpperCase();
    const currentLetters = userInput.split('');
    this.activeBoard = this.activeBoard.map((letterObj) => {
      if (currentLetters.includes(letterObj.letter)) {
        return Object.assign({}, letterObj, {active: true});
      } else {
        return Object.assign({}, letterObj, {active: false});
      }
    });
  }
}

const store = new BoggleStore;

export default store;