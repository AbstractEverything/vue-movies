import Vue from 'vue'
import Router from 'vue-router'
import CompleteAuth from './views/CompleteAuth.vue'
import RatedMovies from './views/RatedMovies.vue'
import PopularMovies from './views/PopularMovies.vue'
import TopMovies from './views/TopMovies.vue'
import UpcomingMovies from './views/UpcomingMovies.vue'
import SearchResults from './views/SearchResults.vue'
import ShowMovie from './views/ShowMovie.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/complete',
      name: 'account',
      component: CompleteAuth,
    },
    {
      path: '/rated',
      name: 'rated',
      component: RatedMovies,
    },
    {
      path: '/',
      name: 'popular',
      component: PopularMovies,
    },
    {
      path: '/top',
      name: 'top',
      component: TopMovies,
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: UpcomingMovies,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: ShowMovie,
    },
    {
      path: '/results',
      name: 'results',
      component: SearchResults,
    }
  ]
})

export default router