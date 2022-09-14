import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  getters: {
  },
  mutations: {
    changeMode(state) {
      state.darkMode = !state.darkMode
      const footer = document.querySelector('footer')
      const nav = document.querySelector('nav')
      const main = document.querySelector('.main-container')

      if (state.darkMode) {
        footer.setAttribute('data-theme', 'dark')
        nav.setAttribute('data-theme', 'dark')
        main.setAttribute('data-theme', 'dark')
        console.log(document.querySelector('footer'))
      } else {
        footer.setAttribute('data-theme', 'light')
        nav.setAttribute('data-theme', 'light')
        main.setAttribute('data-theme', 'light')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
