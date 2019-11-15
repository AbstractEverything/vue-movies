<template functional>
  <div class="movie-item">
    <router-link class="poster-img-link"
      :to="{ name: 'movie', params: { id: props.id } }"
    >
      <img src="/img/no-image.png" alt="No image avaliable" class="poster-img" v-if="props.posterPath == null" />
      <img class="poster-img"
        v-if="props.posterPath != null"
        :src="'https://image.tmdb.org/t/p/w185/' + props.posterPath"
        :alt="props.title"
      />
    </router-link>
    <p class="has-text-grey">{{ props.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
    posterPath: {
      required: true,
    },
  }
}
</script>

<style lang="scss">
.poster-img {
  width: 100%;
  transition: transform .2s ease, filter .2s ease-in-out;
  filter: grayscale(50%);
}

.poster-img:hover {
  transform: scale(1.1);
  filter: grayscale(0);
}
</style>