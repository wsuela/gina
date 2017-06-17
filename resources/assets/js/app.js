
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('App', require('./components/App.vue'));
Vue.component('Launcher', require('./components/Launcher.vue'));
Vue.component('Widgets', require('./components/Widgets.vue'));

const app = new Vue({
    el: '#app',
    store
});

window.Vue = Vue;
