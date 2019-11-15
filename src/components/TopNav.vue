<template>
  <nav class="navbar top-nav" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item main-title" :href="getBaseUrl()">
        <strong>Vue Movies</strong>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="topNavbar"
        @click.prevent="toggleMenu()"
        :class="{ 'is-active': menuActive }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="topNavbar" class="navbar-menu" :class="{ 'is-active': menuActive }">
      <div class="navbar-end">
        <router-link class="navbar-item" :to="{ name: 'rated' }">Rated</router-link>
        <auth/>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Auth from './Auth.vue'

export default {
  components: {
    Auth,
  },
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = ! this.menuActive
    },
    getBaseUrl() {
      return process.env.VUE_APP_BASE_URL
    }
  },
  computed: {
    ...mapGetters('auth', [
      'loggedIn',
    ]),
  }
}
</script>

<style lang="scss">
@import '../assets/sass/style.scss';

.top-nav {
  background: transparent !important;
}

.main-title {
  padding: 10px;
  color: #fff !important;
  background: $primary;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.main-title:hover {
  background: $primary !important;
}
</style>