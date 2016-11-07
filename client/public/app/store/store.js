import { observable } from 'mobx';
import { getRandomNumber } from '../utils.js';

class BoggleStore {

  @observable activeBoard = [];
  @observable userInput = '';
  @computed get activeBoard() {
  	this.activeBoard = this.possibleDice.map(die => {
  			return die[getRandomNumber(0, 6)]
  		})
  }

  @observable possibleDice = [
				  										['R', 'I', 'F', 'O', 'B', 'X'],['I', 'F', 'E', 'H', 'E', 'Y'],['D', 'E', 'N', 'O', 'W', 'S'],['U', 'T', 'O', 'K', 'N', 'D'],
				  										['H', 'M', 'S', 'R', 'A', 'O'],['L', 'U', 'P', 'E', 'T', 'S'],['A', 'C', 'I', 'T', 'O', 'A'],['Y', 'L', 'G', 'K', 'U', 'E'],
				  										['Qu', 'B', 'M', 'J', 'O', 'A'],['E', 'H', 'I', 'S', 'P', 'N'],['V', 'E', 'T', 'I', 'G', 'N'],['B', 'A', 'L', 'I', 'Y', 'T'],
				  										['E', 'Z', 'A', 'V', 'N', 'D'],['R', 'A', 'L', 'E', 'S', 'C'],['U', 'W', 'I', 'L', 'R', 'G'],['P', 'A', 'C', 'E', 'M', 'D']
			  											];



}

const store = new BoggleStore;

export default store;