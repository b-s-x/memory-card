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

    async sendDataToServer({state}) {
      const data = state.dataCurrentItem

      const response = await fetch("/file", {
        method: "POST",
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
        }),
        body: JSON.stringify(data)
      })
    }
  },

  mutations: {
    settingData(state, data) {
      state.dataSet = data
    },

    giveMeWord(state) {
      let randomIndex = Math.floor(Math.random() * state.dataSet.length);

      //?? придумать логику чтобы при двух подряд одинаковых randomIndex
      //?? выпадало другое рандомное значение

      state.lastRandomIndex = randomIndex
      state.dataCurrentItem = state.dataSet[randomIndex]
    },

    countRaise(state) {
      let count = state.dataCurrentItem.count
      console.log("before", count);
      if (count >= 5) {
        count = 5
      } else {
        state.dataCurrentItem.count++
      }
    },

    countDecline(state) {
      let count = state.dataCurrentItem.count
      if (count <= 0) {
        count = 0
      } else {
        state.dataCurrentItem.count--
      }
    }
  },
})


// 1) логика обновления каунтера на сервере
// 2) отправить запрос на сервер с обновлением обновитьи вернуть данные
// 3) дебоунс для задержки на сервер
