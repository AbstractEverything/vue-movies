<template>
  <div class="menu">
    <search-modal v-if="showModal" @close="showModal = false"/>
    <ul class="menu-list">
      <li class="menu-list-item has-text-centered">
        <router-link :to="{ name: 'popular' }">
          <i class="far fa-star menu-list-item-icon"></i><br />Popular
        </router-link>
      </li>
      <li class="menu-list-item has-text-centered">
        <router-link :to="{ name: 'top' }">
          <i class="fas fa-list-ol menu-list-item-icon"></i><br />Top
        </router-link>
      </li>
      <li class="menu-list-item has-text-centered">
        <router-link :to="{ name: 'upcoming' }">
          <i class="far fa-arrow-alt-circle-up menu-list-item-icon"></i><br />Upcoming
        </router-link>
      </li>
      <li class="menu-list-item has-text-centered">
        <a href="#" @click.prevent="showModal = true">
          <i class="fas fa-search menu-list-item-icon"></i><br />Search
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchModal from './SearchModal.vue'

export default {
  components: {
    SearchModal,
  },
  data() {
    return {
      showModal: false,
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/style.scss';

.menu-list-item a {
  border: 1px solid $white-ter;
  padding: 20px 0 20px 0 !important;
  margin: 0 0 20px 0;
  transition: .2s ease-in;
  font-weight: bold;
}

.menu-list-item a:hover {
  border: 1px solid $grey-lighter;
  background: $white-ter;
}

.menu-list-item-icon {
  font-size: 2em;
  margin: 0 0 10px 0;
  color: $grey-light;
}

.router-link-exact-active {
  background: $white-ter;
}
</style>