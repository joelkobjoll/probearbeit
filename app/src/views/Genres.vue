<template>
  <div class="genres">
    <Genres/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Genres from '@/components/Genres.vue';

@Component({
  components: {
    Genres,
  },
})

export default class Genre extends Vue {}
</script>
