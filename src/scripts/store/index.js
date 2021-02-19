import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSet: [],
    dataCurrentItem: {},
    lastRandomIndex: 0,
  },

  getters: {
    dataCurrentItem(store) {
      return store.dataCurrentItem
    },

    dataSet(store) {
      return store.dataSet
    }
  },

  actions: {
    async fetchArray({ commit }) {
      const result = await fetch('files/words-test.json')
      const data = await result.json()

      commit('settingData', data)
    },

    async sendDataToServer() {
      const data = {"namememkgndgjdbgBSXBSX": 1 };

      const response = await fetch("/file", {
        method: "POST",
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
      })
    }
  },

  mutations: {
    settingData(state, data) {
      state.dataSet = data
    },

    giveMeWord(state ) {
      let randomIndex = Math.floor(Math.random() * state.dataSet.length);
      console.log(randomIndex);

      // if(randomIndex === state.lastRandomIndex) {
      // //todo something
      // } else {
      // }
      state.lastRandomIndex = randomIndex
      state.dataCurrentItem = state.dataSet[randomIndex]
    },

    countRaise(state) {
      state.dataSet[state.lastRandomIndex].count++
    }
  },
})
