<template>
  <div class="popular-movies">
    <h2>You are now logged in</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  mounted() {
    if ( ! this.loggedIn && this.$router.currentRoute.query.request_token) {
      this.login(this.$router.currentRoute.query.request_token)
    }
  },
  methods: {
    ...mapActions('auth', [
      'login',
      'getAccountId',
    ]),
  },
  computed: {
    ...mapGetters('auth', [
      'loggedIn',
    ]),
  }
}
</script>