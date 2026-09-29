import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    dark: false,
    adminCollapsed: false,
    searchOpen: false,
  }),
  actions: {
    toggleTheme() {
      this.dark = !this.dark
      document.documentElement.classList.toggle('dark', this.dark)
    },
    toggleAdmin() {
      this.adminCollapsed = !this.adminCollapsed
    },
  },
})
