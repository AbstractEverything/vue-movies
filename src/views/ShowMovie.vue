<template>
  <div class="columns show-movie" v-if=" ! isLoading">
    <div class="backdrop-gradient"></div>
    <div class="backdrop" :style="backdropStyle()"></div>
    <div class="column">
      <div v-if="details.poster_path == null">
        <p>No image is available for this movie.</p>
      </div>
      <img 
        class="poster"
        v-if="details.poster_path != null"
        :src="'https://image.tmdb.org/t/p/w500/' + details.poster_path"
        :alt="details.original_title"
      />
    </div>
    <div class="column">
      <div class="box">
        <div class="movie-description">
          <h2>{{ details.original_title }}</h2>
          <div class="tags are-small">
            <span
              v-for="genre in details.genres"
              :key="genre"
              :class="'tag is-light'">
              {{ genre.name }}
            </span>&nbsp;
          </div>
          <p>{{ details.overview }}</p>
        </div>
        <hr />
        <div class="movie-meta">
          <ul class="rating-list">
            <li class="has-text-left">
              <span v-if="loggedIn() && hasRated">
                <span class="tag is-light is-medium">
                  <i class="fas fa-check"></i>&nbsp;Rated
                </span>
              </span>
              <star-rating 
                v-if="loggedIn() && ! hasRated"
                :maxStars="5"
                @rated="childRatingClicked"
              />
            </li>
            <li class="has-text-right">
              <strong><span class="tag is-dark is-medium">{{ details.vote_average }}</span></strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import StarRating from '../components/StarRating.vue'

export default {
  components: {
    StarRating,
  },
  created() {
    this.fetchDetails(this.$router.currentRoute.params.id)
  },
  methods: {
    ...mapActions('details', [
      'fetchDetails',
      'rateMovie',
    ]),
    ...mapGetters('auth', [
      'loggedIn',
    ]),
    childRatingClicked(n) {
      this.rateMovie({
        id: this.$router.currentRoute.params.id,
        rating: n * 2
      })
    },
    backdropStyle() {
      return {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w500'
          + this.details.backdrop_path
          + ')',
      }
    },
  },
  computed: {
    ...mapState({
      isLoading: state => state.details.isLoading,
      details: state => state.details.movie,
      rated: state => state.details.rated,
    }),
    hasRated() {
      return this.rated.includes(this.$router.currentRoute.params.id.toString())
    },
  }
}
</script>

<style lang="scss">
.backdrop, .backdrop-gradient {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
}

.backdrop {
  opacity: 0.3;
  z-index: -2;
  background-size: 100%;
  background-repeat: no-repeat;
}

.backdrop-gradient {
  z-index: -1;
  background: url(/img/gradient.png);
  background-size: 100%;
}

.poster {
  margin: 0 0 20px 0;
}

.rating-list {
  margin-left: 0 !important;
  display: flex;
  align-items: center;
}

.rating-list li {
  width: 100%;
  list-style: none;
}
</style>