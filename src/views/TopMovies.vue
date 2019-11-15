<template>
  <div class="top-movies">
    <h2>Top Rated</h2>
    <movie-list
      :items="movies"
      :perPage="20">
    </movie-list>
    <hr />
    <button class="button" @click="fetchTop(page + 1)">Load more</button>
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
    this.fetchTop(1)
  },
  methods: {
    ...mapActions('movies', [
      'fetchTop',
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