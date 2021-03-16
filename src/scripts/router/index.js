import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@pages/Main'
import Dictionary from '@pages/Dictionary'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'root',
      component: Main
    },

    {
      path: '/dictionary',
      name: 'root',
      component: Dictionary,
    },

    // {
    //   path: '*',
    //   component: 404
    // }
  ]
})
