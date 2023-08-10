import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  // other options...
  state: () => ({
    isLoggedIn: false
  })
})