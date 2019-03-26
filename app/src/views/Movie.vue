<template>
  <div class="movie">
    <Movie/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Movie from '@/components/Movie.vue';

@Component({
  components: {
    Movie,
  },
})

export default class AMovie extends Vue {}
</script>
