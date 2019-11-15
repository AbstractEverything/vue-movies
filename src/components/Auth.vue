<template>
  <div class="auth">
    <a href="#" class="navbar-item"
      v-if=" ! loggedIn"
      @click.prevent="redirectToAuth()">
      Login
    </a>
    <a href="#" class="navbar-item"
      v-if="loggedIn"
      @click.prevent="logout()">
      Logout
    </a>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import api from '../api'

export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    redirectToAuth() {
      api.getRequestToken().then((response) => {
        window.location.href = 'https://www.themoviedb.org/authenticate/'
          + response.data.request_token
          + '?redirect_to='
          + process.env.VUE_APP_AUTH_REDIRECT
      })
    },
  },
  computed: {
    ...mapGetters('auth', [
      'loggedIn',
    ]),
  }
}
</script>

<style lang="scss">
.auth {
  display: flex;
}
</style>