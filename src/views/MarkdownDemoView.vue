<template>
  <div class="markdown-demo">
    <app-layout>
      <MarkdownDemo/>
    </app-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppLayout from '@/components/layout/AppLayout.vue';
import MarkdownDemo from '@/components/MarkdownDemo.vue';

const components = {
  AppLayout,
  MarkdownDemo
};

// noinspection JSUnusedGlobalSymbols
@Component({ components })
export default class ElementUIDemoView extends Vue {
}
</script>
