import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSet: [],
    dataItem: {},
  },

  getters: {
    dataItem(store) {
      return store.dataItem
    }
  },

  actions: {
    async fetchArray({ commit }) {
      const result = await fetch('files/words.json')
      const data = await result.json()

      commit('settingData', data)
    }
  },

  mutations: {
    settingData(state, data) {
      state.dataSet = data
    },

    giveMeWord(state) {
      let randomIndex = Math.floor(Math.random() * state.dataSet.length);

      state.dataItem = {
        translate: state.dataSet[randomIndex].translate,
        content: state.dataSet[randomIndex].text,
        count: state.dataSet[randomIndex].count,
      }
    },
  },
})
