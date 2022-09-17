import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    colorChose: "",
    sortChose: ""
  },
  getters: {
  },
  mutations: {
    changeMode(state, clickEl) {
      const footer = document.querySelector('footer')
      const nav = document.querySelector('nav')
      const main = document.querySelector('.main-container')
      if (clickEl === 'clickNav') {
        state.darkMode = !state.darkMode
      }

      if (state.darkMode) {
        footer.setAttribute('data-theme', 'dark')
        nav.setAttribute('data-theme', 'dark')
        main.setAttribute('data-theme', 'dark')
      } else if (!state.darkMode) {
        footer.setAttribute('data-theme', 'light')
        nav.setAttribute('data-theme', 'light')
        main.setAttribute('data-theme', 'light')
      }
    },
    changeColorCondition(state, color) {
      state.colorChose = color
    },
    changeSortCondition(state, sort) {
      state.sortChose = sort
    }
  },
  actions: {
  },
  modules: {
  }
})
