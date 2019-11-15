<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content">
        <div class="box">
          <div class="control">
            <input class="input" type="text" placeholder="Search for movie names..."
              v-model="query"
              ref="query"
              @keyup.enter="search()"
            >
          </div>
        </div>
      </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  mounted() {
    this.$refs.query.focus()
  },
  methods: {
    search() {
      this.$emit('close')
      this.$router.push({
        path: '/results', query: { 
          query: this.query,
        },
      })
    }
  }
}
</script>