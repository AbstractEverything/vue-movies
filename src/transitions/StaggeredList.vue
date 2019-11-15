<template>
  <transition-group
    name="staggered-list"
    tag="div"
    :css="false"
    :class="listClass"
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <div 
      v-for="(item, index) in items"
      :key="item.id"
      :data-index="index"
      :class="listItemClass"
    >
      <slot :item="item" :index="index"></slot>
    </div>
  </transition-group>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    listClass: {
      type: String,
      default: 'staggered-list'
    },
    listItemClass: {
      type: String,
      default: 'staggered-list-item'
    },
  },
  data() {
    return {
      currentEl: 0,
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1 },
          { complete: done }
        )
      }, this.delay())
    },
    delay() {
      let delay = this.currentEl * 100
      this.currentEl++

      if (this.currentEl > this.perPage - 1) {
        this.currentEl = 0
      }

      return delay
    }
  }
}
</script>