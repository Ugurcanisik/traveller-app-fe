import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/"

import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
