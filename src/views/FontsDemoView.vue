<template>
  <div class="fonts-demo">
    <app-layout>
      <FontsDemo/>
    </app-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppLayout from '@/components/layout/AppLayout.vue';
import FontsDemo from '@/components/FontsDemo.vue';

const components = {
  AppLayout,
  FontsDemo
};

// noinspection JSUnusedGlobalSymbols
@Component({ components })
export default class FontsDemoView extends Vue {}
</script>
