import { observable } from 'mobx';
import { getRandom } from '../utils.js';

class BoggleStore {
	constructor() {
		this.possibleDice = [
			['R', 'I', 'F', 'O', 'B', 'X'],['I', 'F', 'E', 'H', 'E', 'Y'],['D', 'E', 'N', 'O', 'W', 'S'],['U', 'T', 'O', 'K', 'N', 'D'],
			['H', 'M', 'S', 'R', 'A', 'O'],['L', 'U', 'P', 'E', 'T', 'S'],['A', 'C', 'I', 'T', 'O', 'A'],['Y', 'L', 'G', 'K', 'U', 'E'],
			['Qu', 'B', 'M', 'J', 'O', 'A'],['E', 'H', 'I', 'S', 'P', 'N'],['V', 'E', 'T', 'I', 'G', 'N'],['B', 'A', 'L', 'I', 'Y', 'T'],
			['E', 'Z', 'A', 'V', 'N', 'D'],['R', 'A', 'L', 'E', 'S', 'C'],['U', 'W', 'I', 'L', 'R', 'G'],['P', 'A', 'C', 'E', 'M', 'D']
			];
	}

  @observable activeBoard = [];
  @observable userInput = '';
  getActiveBoard() {
  	this.activeBoard = this.possibleDice.map((die, i) => {
  		let neighbors = [i-5, i-4, i-3, i-1, i+1, i+3, i+4, i+5].filter((i) => (i >=0 && i <= 15));
	  	if (i % 4 === 0) {
	  		neighbors = neighbors.filter(i => ((i + 1) % 4 !== 0));
	  	}
	  	if ((i+1) % 4 === 0) {
	  		neighbors = neighbors.filter(i => (i % 4 !== 0));
	  	}
  		return {letter: die[getRandom(0, 6)], neighbors}
  	})
  }
  processInput(value) {
  	const userInput = this.userInput = value;
  	if (userInput.length === 1) {
  	}
  }
}

const store = new BoggleStore;

export default store;