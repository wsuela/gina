
// initial state
const state = {
    widgets: [],
    buttons: ['minimize','restore','maximize','close'],
}

// getters
const getters = {
    state: state => state
}

// actions
const actions = {
    addWidget ({ commit }, widget) {
        commit('ADD_ACTIVE_WIDGET', widget)
    },
    setLocation ({ commit }, {widget,location}) {
        commit('WIDGET_LOCATION', {widget,location})
    },
    setActive ({ commit }, {widget}) {
        if(widget.active === false){
            commit('WIDGET_ACTIVE', {widget})
        }
    },
    setState ({ commit }, {widget,windowState}) {
        
        if(!widget.state){
            commit('WIDGET_LAUNCH', {widget})
        } else {
            commit('WIDGET_STATE', {widget,windowState})
        }
        commit('WIDGET_ACTIVE', {widget})
        
    },
    loadWidgets ({ commit }) {
        
        axios.get('/api/widget').then(function(resp){
            let {data} = resp;
            commit('LOAD_WIDGET',data);
        }.bind(this)).catch(function(error){
            console.log(error)
        })
    }
}

// mutations
const mutations = {
    WIDGET_LAUNCH (state, {widget}) {
        let location = {
            x:30*widget.id,
            y:30*widget.id,
            z:30
        }
        Vue.set(widget, 'state', 'open');
        Vue.set(widget, 'location', location );
        Vue.set(widget, 'active', true );
    },
    WIDGET_STATE (state, {widget,windowState}) {
        widget.state = windowState;
        if(['minimize','close'].includes(windowState)){
            widget.active = false;
        }
    },
    WIDGET_ACTIVE (state, {widget}) {
        state.widgets.map(child => {
            child.active = child.id === widget.id && !['minimize','close'].includes(widget.state);
        })
    },
    WIDGET_LOCATION (state, {widget,location}) {
        widget.location = location;
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