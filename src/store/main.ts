import { defineStore } from "pinia"

export const useMainStore = defineStore({
  id: "main", state: () => {
    return {
      isLoggedIn: false,
      token: '',
      userInfo: {}
    }
  },
  persist: {
    enabled: true,
    strategies: [{
      key: 'main',
      storage: localStorage
    }]
  }
})