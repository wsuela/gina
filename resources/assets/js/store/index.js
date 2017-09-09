import Vue from 'vue'
import Vuex from 'vuex'
import widgets from './modules/widgets'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let plugins = []

if(debug) {
	plugins.push(store => {
		// called when the store is initialized
		store.subscribe((mutation, state) => {
		// called after every mutation.
		// The mutation comes in the format of `{ type, payload }`.
			console.log(mutation);
		})
	})
}

export default new Vuex.Store({
  modules: {
    widgets
  },
  strict: debug,
  plugins
})