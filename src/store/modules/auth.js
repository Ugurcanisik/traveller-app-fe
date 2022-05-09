import axios from "axios";
import {router} from '@/router'
import swal from 'sweetalert2'
import Vue from "vue";

const state = {
    token: "",
    user: null
}

const getters = {
    isAuthenticated(state) {
        return state.token !== ""
    },
    getUser(state) {
        return state.user
    },
    getToken(state) {
        return state.token
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = ""
    },
    setUser(state, payload) {
        state.user = payload
    }
}

const actions = {
    initAuth({commit, dispatch, state}) {
        let token = localStorage.getItem("token")
        if (token) {

            return axios.get('/auth/' + token)
                .then(response => {
                    if (response.data) {
                        console.log(response.data)
                        const user = response.data
                        commit('setUser', user)
                        commit("setToken", token)
                        return true
                    } else {
                        dispatch('logout')
                        return false
                    }
                })

        } else {
            return false
        }
    },
    login({commit, dispatch, state}, payload) {
        return axios.post('/auth', payload.user)
            .then(response => {

                if (response.data != false) {
                    let timer = 3000
                    let token = response.data.token
                    localStorage.setItem("token", token)
                    commit("setToken", token)
                    const user = response.data
                    commit('setUser', user)
                    Vue.swal({
                        text: "Giriş Başarılı",
                        icon: "success",
                        button: false,
                        timer: timer,
                        showCloseButton: false,
                        showConfirmButton: false,
                    });
                    setTimeout(() => {
                        router.push("/dashboard")
                        //  router.replace('/')
                    }, timer)
                } else {
                    return false
                }
            })
    },
    logout({commit, dispatch, state}) {
        commit("clearToken")
        commit("setUser", null)
        localStorage.removeItem("token")
    },
    saveUser({dispatch, commit, state}, payload) {
        return axios.post("/users", payload)
            .then(response => {
                if (response.status === 201) {
                    let timer = 3000
                    Vue.swal({
                        text: "Sign Up Success",
                        icon: "success",
                        button: false,
                        timer: timer,
                        showCloseButton: false,
                        showConfirmButton: false,
                    });
                    setTimeout(() => {
                        router.push("/login")
                        //  router.replace('/')
                    }, timer)
                } else {
                    return false
                }
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}

