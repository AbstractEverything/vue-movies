import api from '../api'

const state = {
  sessionId: localStorage.getItem('session_id') || '',
  accountId: localStorage.getItem('account_id') || '',
  isLoading: true,
  errors: null,
}

const actions = {
  login({ dispatch, commit }, requestToken) {
    commit('setIsLoading', true)
    return api.getSessionId(requestToken).then((response) => {
      commit('setSessionId', response.data.session_id)
      return dispatch('getAccountId').then(() => {
        commit('setIsLoading', false)
      })
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  logout({ commit, state }) {
    commit('setIsLoading', true)
    return api.deleteSessionId(state.sessionId).then(() => {
      commit('setSessionId', '')
      commit('setIsLoading', false)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  getAccountId({ commit, state }) {
    return api.getAccount(state.sessionId).then((response) => {
      commit('setAccountId', response.data.id)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
}

const mutations = {
  setSessionId(state, sessionId) {
    localStorage.setItem('session_id', sessionId)
    state.sessionId = sessionId
  },
  setAccountId(state, accountId) {
    localStorage.setItem('account_id', accountId)
    state.accountId = accountId
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setError(state, errors) {
    state.errors = errors
  },
}

const getters = {
  loggedIn(state) {
    return !! state.sessionId
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}