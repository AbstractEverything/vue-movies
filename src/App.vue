<template>
  <div id="app">
    <section class="section top-nav">
      <div class="container">
        <top-nav/>
      </div>
    </section>
    <section class="section main-content">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth sidebar">
            <side-nav/>
          </div>
          <div class="column content">
            <fade-in-out>
              <router-view/>
            </fade-in-out>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import SideNav from './components/SideNav.vue'
import FadeInOut from './transitions/FadeInOut.vue'

export default {
  components: {
    TopNav,
    SideNav,
    FadeInOut,
  },
}
</script>

<style lang="scss">
@import 'assets/sass/style.scss';

body {
  border-top: 5px solid $primary;
}

#app {
  background: transparent;
}
</style>
