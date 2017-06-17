import Vue from 'vue'
import Vuex from 'vuex'
import widgets from './modules/widgets'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    widgets
  },
  strict: debug
})