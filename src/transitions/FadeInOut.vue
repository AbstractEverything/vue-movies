<template functional>
  <transition name="fade" :mode="props.mode">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    mode: {
      default: 'out-in',
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>