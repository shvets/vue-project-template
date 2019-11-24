<template>
  <Layout class="app-layout">
    <template #header>
      <div class="nav">
        <ThemeControl ref="themeControl" :theme="currentTheme" @change="onThemeChange"/>
      </div>
    </template>

    <slot />

    <template #footer>
      <div class="footer">
        Copyright &copy; 2019. footer.
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import Component, {mixins} from 'vue-class-component';

import Layout from './Layout.vue';
import ThemeControl from './ThemeControl.vue';

import '../../plugins/vue-head';
import '../../plugins/element-ui';
import '../../plugins/svgicon';
import '../../plugins/vue-awesome.ts';
import '../../plugins/web-components.ts';
import '../../plugins/composition-api.ts';

import '../../assets/styles/index.scss';

import {ThemeMixin} from '@/mixins/theme-mixin';

const components = {
  Layout,
  ThemeControl
};

@Component({ components })
export default class AppLayout extends mixins(ThemeMixin) {}
</script>
