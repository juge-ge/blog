import { defineStore } from 'pinia'

const ADMIN_TOKEN_KEY = 'blog_admin_token'
const VISITOR_KEY = 'blog_visitor_entered'

export const useAppStore = defineStore('app', {
  state: () => ({
    dark: false,
    adminCollapsed: false,
    searchOpen: false,
    adminToken: localStorage.getItem(ADMIN_TOKEN_KEY) || '',
    visitorEntered: sessionStorage.getItem(VISITOR_KEY) === '1',
  }),
  getters: {
    isAdmin: (state) => Boolean(state.adminToken),
  },
  actions: {
    toggleTheme() {
      this.dark = !this.dark
      document.documentElement.classList.toggle('dark', this.dark)
    },
    toggleAdmin() {
      this.adminCollapsed = !this.adminCollapsed
    },
    loginAdmin(username: string) {
      const token = `demo-token-${Date.now()}`
      this.adminToken = token
      localStorage.setItem(ADMIN_TOKEN_KEY, token)
      localStorage.setItem('blog_admin_name', username)
    },
    logoutAdmin() {
      this.adminToken = ''
      localStorage.removeItem(ADMIN_TOKEN_KEY)
      localStorage.removeItem('blog_admin_name')
    },
    enterPublic() {
      this.visitorEntered = true
      sessionStorage.setItem(VISITOR_KEY, '1')
    },
  },
})
