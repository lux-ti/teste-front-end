import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    repositories: [],
    users: []
  }),
  getters: {},
  actions: {}
})
