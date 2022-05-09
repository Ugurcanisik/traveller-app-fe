import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import axios from "axios";
import {Vuelidate} from "vuelidate"
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


axios.defaults.baseURL = "http://localhost:3000/"
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

store.dispatch('initAuth').then(response => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')

}).catch(e => {
    console.log(e)
})