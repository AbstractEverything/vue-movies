<template>
  <div class="popular-movies">
    <h2>Popular</h2>
    <movie-list
      :items="movies"
      :perPage="20">
    </movie-list>
    <hr />
    <button class="button" @click="fetchPopular(page + 1)">Load more...</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MovieList from '../components/MovieList.vue'

export default {
  components: {
    MovieList,
  },
  created() {
    this.clearItems()
    this.fetchPopular(1)
  },
  methods: {
    ...mapActions('movies', [
      'fetchPopular',
      'clearItems',
    ]),
  },
  computed: {
    ...mapState({
      movies: state => state.movies.items,
      page: state => state.movies.currentPage,
    })
  }
}
</script>