<template>
  <div class="genres">
    <Genre/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Genre from '@/components/Genre.vue';

@Component({
  components: {
    Genre,
  },
})

export default class AGenre extends Vue {}
</script>
