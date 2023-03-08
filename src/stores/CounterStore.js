import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', {
  //state -> propriedades reativas
  state(){
    return {
      count: 0
    }
  },

  //actions -> metodos
  actions {
    increment(){
      this.count++;
    }
  },

  //getters -> propriedades computadas
  getters(){
    showCount(){
      return 'O valor do count é: '+this.count
    }
  }
})