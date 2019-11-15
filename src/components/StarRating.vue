<template>
  <div class="rating">
    <span class="rating-star"
      v-for="(star) in maxStars"
      :key="star"
      @click="rate(star)"
      @mouseover="hovering(star)"
      @mouseout="hovering(false)"
    >
      <span class="rating-star" v-if="star <= isHovering">&starf;</span>
      <span class="rating-star" v-if="star > isHovering">&star;</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      ratingClicked: false,
      isHovering: false,
    }
  },
  methods: {
    hovering(star) {
      this.isHovering = star
    },
    rate(n) {
      this.$emit('rated', n)
    },
  }
}
</script>

<style lang="scss">
.rating-star {
  font-size: 1.2em;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>