import { observable } from 'mobx';

class BoggleStore {
  @observable board = ['a','b','c'];
  @observable userInput = '';
}

const store = new BoggleStore;

export default store;