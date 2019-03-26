<template>
  <div class="movies">
    <Movies/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Movies from '@/components/Movies.vue';

@Component({
  components: {
    Movies,
  },
})

export default class Movie extends Vue {}
</script>
