import Vue from "vue"
import Vuex from "vuex"
import auth from './auth.module'
import movies from "./movies.module"
import details from "./details.module"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    movies,
    details,
  }
})