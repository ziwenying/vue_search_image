import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    colorChose: "",
    sortChose: "",
    showImg: {
      id: -1,
      createdAt: "",
      likeCounts: 0,
      regular: "",
      small: "",
      isFavorite: false,
    }
  },
  getters: {
  },
  mutations: {
    getOneImage(state, oneImage) {
      if (!oneImage.id) {
        state.showImg = JSON.parse(localStorage.getItem("STORAGE_showImg"))
      } else if (oneImage.id) {
        state.showImg = oneImage
        localStorage.setItem("STORAGE_showImg", JSON.stringify(oneImage));
      }
    },
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
    visitImagePage({ commit }) {
      const getImage = JSON.parse(localStorage.getItem('STORAGE_showImg'))
      commit('getOneImage', getImage)
    }
  },
  modules: {
  }
})
