import axios from "axios";



const state = {
    like: []
}

const getters = {
    getLike(state) {
        return state.like;
    }
}

const mutations = {
    updateLike(state, payload) {
        state.like.push(payload)
    },
}

const actions = {
    saveLike({dispatch, commit, state}, payload) {
        return axios.post("/like", payload)
            .then(response => {
                if (response.status === 201) {
                    commit('updateLike', payload)
                } else {
                    return false
                }
            })
    },
    findLike({dispatch, commit, state}, payload) {
        return axios.get("/like/" + payload)
            .then(response => {
                let like = response.data;
                for (let key in like) {
                    commit("updateLike", like[key]);
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

