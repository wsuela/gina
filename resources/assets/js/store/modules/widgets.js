
// initial state
const state = {
    widgets: [],
    activeWidgets: [],
    buttons: ['minus','plus','remove'],
}

// getters
const getters = {
  all: state => state.all
}

// actions
const actions = {
    addWidget ({ commit }, widget) {
        console.log(widget);
        commit('ADD_ACTIVE_WIDGET', widget)
    },
    loadWidgets ({ commit }) {
        
        axios.get('/api/widget').then(function(resp){
            console.log('LOAD_WIDGET');
            commit('LOAD_WIDGET',resp.data);
        }.bind(this)).catch(function(error){
            console.log(error)
        })
    }
}

// mutations
const mutations = {
  ADD_ACTIVE_WIDGET (state, widget) {
    state.activeWidgets.push(widget);
  },
  LOAD_WIDGET (state, widgets) {
    state.widgets = widgets ;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}