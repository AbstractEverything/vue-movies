import api from '../api'
import axios from 'axios'
import lsh from '../helpers/localStorageHelper'

const state = {
  movie: {},
  rated: lsh.arrayGet('rated'),
  isLoading: true,
  errors: null,
}

const actions = {
  fetchDetails({ commit }, id) {
    commit('setIsLoading', true)
    return api.getDetails(id).then((response) => {
      commit('updateMovie', response.data)
      commit('setIsLoading', false)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
  rateMovie({ commit }, payload) {
    return api.rateMovie(payload.id, payload.rating).then((response) => {
      commit('appendRating', payload.id)
    }).catch((errors) => {
      commit('setError', errors)
    })
  },
}

const mutations = {
  updateMovie(state, movie) {
    state.movie = movie
  },
  appendRating(state, id) {
    lsh.arrayAppend('rated', id.toString())
    state.rated.push(id.toString())
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setError(state, errors) {
    state.errors = errors
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}