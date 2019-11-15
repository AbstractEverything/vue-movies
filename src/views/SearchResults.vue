<template>
  <div class="search-results">
    <h2>Results</h2>
    <p>Search term: <span class="tag is-light">{{ this.$route.query.query }}</span></p>
    <movie-list
      :items="movies"
      :perPage="20">
    </movie-list>
    <hr />
    <button class="button" @click="fetchResults(page + 1)">Load more...</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MovieList from '../components/MovieList.vue'

export default {
  components: {
    MovieList,
  },
  mounted() {
    this.clearItems()
    this.fetchResults(1)
  },
  methods: {
    ...mapActions('movies', [
      'clearItems',
    ]),
    fetchResults(page) {
      this.$store.dispatch('movies/fetchResults', {
        query: this.$route.query.query,
        page: page,
      })
    },
  },
  computed: {
    ...mapState({
      movies: state => state.movies.items,
      page: state => state.movies.currentPage,
    })
  },
  watch: {
    $route() {
      this.clearItems()
      this.fetchResults(1)
    }
  }
}
</script>