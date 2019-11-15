<template>
  <div class="gallery">
    <staggered-list 
      :items="items"
      :perPage="perPage"
      :listClass="'columns is-multiline'"
      :listItemClass="'column is-3'"
    >
      <template #default="slotProps">
        <MovieListItem 
          :id="slotProps.item.id"
          :title="slotProps.item.title"
          :posterPath="slotProps.item.poster_path"
        />
      </template>
    </staggered-list>
  </div>
</template>

<script>
import StaggeredList from '../transitions/StaggeredList.vue'
import MovieListItem from './MovieListItem.vue'

export default {
  props: {
    items: Array,
    perPage: Number,
  },
  components: {
    StaggeredList,
    MovieListItem,
  },
}
</script>