<template>
  <div class="element-ui-demo">
    <app-layout>
      <ElementUIDemo/>
    </app-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AppLayout from '@/components/layout/AppLayout.vue';
import ElementUIDemo from '@/components/ElementUIDemo.vue';

const components = {
  AppLayout,
  ElementUIDemo
};

// noinspection JSUnusedGlobalSymbols
@Component({ components })
export default class ElementUIDemoView extends Vue {
}
</script>
