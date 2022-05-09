import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import Auth from "@/store/modules/auth";
import Like from "@/store/modules/like";
import Comment from "@/store/modules/comment";
import {router} from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        travel: [],
        category: [],
        settings: {},

    },
    getters: {
        allTravel(state) {
            return state.travel;
        },
        allCategory(state) {
            return state.category;
        },
        findOneTraveller: (state) => (id) => {
            return state.travel.filter(element => {
                if (element.id == id) {
                    return element
                }
            })
        }
    },
    mutations: {
        updateTravelList(state, payload) {
            state.travel.push(payload);
        },
        updateCategoryList(state, payload) {
            state.category.push(payload);
        },
        updateSettingsList(state, payload) {
            state.settings = payload;
        },
    },
    actions: {
        initApp({dispatch, commit, state}) {
            return axios.get('/')
                .then(response => {
                    console.log(response)
                    state.category = []
                    let category = response.data.category;
                    for (let key in category) {
                        commit("updateCategoryList", category[key]);
                    }

                    state.travel = []
                    let travel = response.data.travel;
                    for (let key in travel) {
                        commit("updateTravelList", travel[key]);
                    }

                })
        },
        findTraveller({dispatch, commit, state}, payload) {
            const travel = this.getters.findOneTraveller(payload)
            if (travel.length > 0) {
                return travel
            }
        },
    },
    modules: {
        Auth,
        Like,
        Comment
    }
})
