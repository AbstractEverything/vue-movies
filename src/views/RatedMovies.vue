<template>
  <div class="rated-movies">
    <h2>Rated</h2>
    <movie-list
      :items="movies"
      :perPage="20">
    </movie-list>
    <hr />
    <button class="button" @click="fetchRated(page + 1)">Load more...</button>
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
    this.fetchRated(1)
  },
  methods: {
    ...mapActions('movies', [
      'fetchRated',
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