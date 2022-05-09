import axios from "axios";


const state = {
    comment: [],
    allComment: []
}

const getters = {
    getComment(state) {
        return state.comment;
    },
    getAllComment(state) {
        return state.allComment;
    }
}

const mutations = {
    updateComment(state, payload) {
        state.comment.push(payload)
    },
    updateAllComment(state, payload) {
        state.allComment.push(payload)
    },
}

const actions = {
    saveComment({dispatch, commit, state}, payload) {
        return axios.post("/comment", payload.comment)
            .then(response => {
                if (response.status === 201) {
                    let comment = {
                        travel: payload.comment.travel,
                        comment: payload.comment.comment,
                        commentDate: payload.comment.commentDate,
                        user: {
                            id: payload.userInfo.id,
                            firstName: payload.userInfo.firstName,
                            lastName: payload.userInfo.lastName,
                        }
                    }
                    commit('updateComment', comment)
                    commit('updateAllComment', comment)
                } else {
                    return false
                }
            })
    },
    findComment({dispatch, commit, state}, payload) {
        return axios.get("/comment/" + payload)
            .then(response => {
                state.comment = []
                let comment = response.data;
                for (let key in comment) {
                    commit("updateComment", comment[key]);
                }
            })
    },
    findAllComment({dispatch, commit, state}) {
        return axios.get("/comment/")
            .then(response => {
                state.allComment = []
                let allComment = response.data;
                for (let key in allComment) {
                    commit("updateAllComment", allComment[key]);
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

