import api from '../api'

const state = {
  items: [],
  currentPage: 1,
  isLoading: true,
  errors: null,
}

const actions = {
  fetchPopular({ commit }, page) {
    commit('setIsLoading', true)
    return api.getPopular(page).then((response) => {
      commit('appendMovies', response.data.results)
      commit('setCurrentPage', page)
      commit('setIsLoading', false)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  fetchTop({ commit }, page) {
    commit('setIsLoading', true)
    return api.getTop(page).then((response) => {
      commit('appendMovies', response.data.results)
      commit('setCurrentPage', page)
      commit('setIsLoading', false)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  fetchUpcoming({ commit }, page) {
    commit('setIsLoading', true)
    return api.getUpcoming(page).then((response) => {
      commit('appendMovies', response.data.results)
      commit('setCurrentPage', page)
      commit('setIsLoading', false)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  fetchRated({ commit, rootState }, page) {
    commit('setIsLoading', true)
    return api.getRated(rootState.auth.accountId, page).then((response) => {
      commit('appendMovies', response.data.results)
      commit('setCurrentPage', page)
      commit('setIsLoading', false)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  fetchResults({ commit }, { query, page }) {
    commit('setIsLoading', true)
    return api.getSearch(query, page).then((response) => {
      commit('appendMovies', response.data.results)
      commit('setCurrentPage', page)
      commit('setIsLoading', false)
    })
  },
  clearItems({ commit }) {
    commit('clearItems')
  },
}

const mutations = {
  appendMovies(state, items) {
    state.items.push(...items)
  },
  setCurrentPage(state, page) {
    state.currentPage = page
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setError(state, errors) {
    state.errors = errors
  },
  clearItems(state) {
    state.items.length = 0
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}