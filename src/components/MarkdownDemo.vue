<template>
  <div class="fonts-demo">
    <example></example>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import example from './example.vue';

const components = {
  example
};

@Component({components})
export default class MarkdownDemo extends Vue {
}
</script>
