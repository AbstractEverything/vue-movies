# Vue Movie Rating

A movie rating SPA built with Vue.js, Vue-Router and Vuex using the http://www.themoviedb.org API.

.env or .env.local should contain the following values:

~~~
VUE_APP_API_KEY=<<TMDB_API_KEY_HERE>>
VUE_APP_API_LANGUAGE=en-US
VUE_APP_BASE_URL=http://localhost:8080
VUE_APP_AUTH_REDIRECT=http://localhost:8080/auth/complete
VUE_APP_API_BASE_URL=https://api.themoviedb.org/3
~~~

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```