// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import VueMetarial from 'vue-material'
import App from './App'
import router from './router'

Vue.use(VueMetarial)

// Vue.use(Vuex)
// const store = new Vue.Store({
//   state: {
//     projects: [],
//     test: 123
//   }
// })

export const bus = new Vue()

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
