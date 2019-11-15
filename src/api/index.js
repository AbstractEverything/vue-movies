import axios from 'axios'
import auth from '../store/auth.module'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

instance.interceptors.request.use((config) => {
  if (config.params == null) {
    config.params = {}
  }

  if (auth.getters.loggedIn(auth.state)) {
    config.params['session_id'] = auth.state.sessionId
  }

  config.params['api_key'] = process.env.VUE_APP_API_KEY
  config.params['language'] = process.env.VUE_APP_API_LANGUAGE

  return config
})

instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    auth.logout()
  } else {
    return Promise.reject(error)
  }
})

export default {
  getRequestToken() {
    return instance.get('/authentication/token/new')
  },
  getSessionId(requestToken) {
    return instance.post('/authentication/session/new', {
      request_token: requestToken,
    })
  },
  deleteSessionId(sessionId) {
    return instance.delete('/authentication/session', {
      session_id: sessionId,
    })
  },
  getAccount(sessionId) {
    return instance.get('/account', {
      params: {
        session_id: sessionId,
      },
    })
  },
  getRated(accountId, page) {
    return instance.get('/account/' + accountId + ' /rated/movies', {
      params: {
        page: page,
      },
    })
  },
  getPopular(page) {
    return instance.get('/movie/popular', {
      params: {
        page: page,
      },
    })
  },
  getTop(page) {
    return instance.get('/movie/top_rated', {
      params: {
        page: page,
      },
    })
  },
  getUpcoming(page) {
    return instance.get('/movie/upcoming', {
      params: {
        page: page,
      },
    })
  },
  getSearch(search, page) {
    return instance.get('/search/movie', {
      params: {
        query: search,
        page: page,
      }
    })
  },
  getDetails(id) {
    return instance.get('/movie/' + id)
  },
  getReviews(id) {
    return instance.get('/movie/' + id + '/reviews')
  },
  rateMovie(id, n) {
    return instance.post('/movie/ ' + id + '/rating', {
      value: n,
    })
  },
}