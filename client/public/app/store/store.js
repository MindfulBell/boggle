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
  getActiveBoard() {
  	this.activeBoard = this.possibleDice.map((die, i) => {
      const letter = die[getRandom(0, 6)];
  		let neighbors = [i-5, i-4, i-3, i-1, i+1, i+3, i+4, i+5].filter((i) => (i >=0 && i <= 15));
	  	if (i % 4 === 0) {
	  		neighbors = neighbors.filter(i => ((i + 1) % 4 !== 0));
	  	}
	  	if ((i+1) % 4 === 0) {
	  		neighbors = neighbors.filter(i => (i % 4 !== 0));
	  	}
	  	this.justLetters.push(letter);
  		return {letter, neighbors}
  	})
  }
  // setLetterActive(value) {
  //   this.activeBoard = this.activeBoard.map((die, i) => {
		// 	if (value === die.letter) {
		// 		this.priorIndex = i;
		// 		return Object.assign(die, {active: true});
		// 	}
		// 	return die;
		// });
  // }
  getCurrentIndeces(value) {
    let indeces = [];
    this.justLetters.forEach((letter, i) => {
      if (value === letter) {
        indeces.push(i);
      }
    });
    return indeces;
  }

  checkNeighborsOfLetter(letter) {

  }
  // PROBLEM IS CURRENTINDECES CAN HOLD 2 INDEXES, MUST CHECK FOR BOTH! NOT JUST ONE!
  // HOW TO UNHIGHLIGHT ON BACKSPACE?! Maybe just make a userPassingWord value, any letter in there is highlighted, or even
  // fill it with indeces to highlight
  processInput(value) {
    const userInput = this.userInput = value.toUpperCase();
    const currentLetter = userInput[userInput.length - 1];
    const currentIndeces = this.getCurrentIndeces(currentLetter);
    if (this.justLetters.includes(currentLetter)) {
      if (userInput.length === 1) {
        this.validWordIndeces = [...currentIndeces];
        return;
      }
      console.log(currentIndeces);
      if (currentIndeces.length === 1) {

        let newValidIndeces = [];
        this.validWordIndeces.forEach((boardIndex, ind) => {
          if (this.activeBoard[boardIndex].includes(currentIndeces[0])) {
            newValidIndeces.push(currentIndeces[0]);
          }
          else {
            this.validWordIndeces.splice(ind, 1);
          }
        });
        this.validWordIndeces = [...validWordIndeces, ...newValidIndeces];
      }
    }
		// if (this.justLetters.includes(currentLetter)) {
     //  const currentIndeces = this.getCurrentIndex(currentLetter);
		// 	if (userInput.length === 1) {
     //    this.setLetterActive(currentLetter);
     //    return;
		// 	}
		// 	if (this.activeBoard[this.priorIndex].neighbors.includes(currentIndeces)) {
     //    this.setLetterActive(currentLetter);
     //    return;
     //  }
		// }

    // press letter, if it is the first letter, give it active
    // if it is second or higher, check if it's index is in the neighbor array of prior element
    //
  }
}

const store = new BoggleStore;

export default store;