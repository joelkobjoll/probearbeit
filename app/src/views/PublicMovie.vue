<template>
  <div class="movie">
    <PublicMovie/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PublicMovie from '@/components/PublicMovie.vue';

@Component({
  components: {
    PublicMovie,
  },
})

export default class Movie extends Vue {}
</script>
