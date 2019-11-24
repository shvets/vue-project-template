<!--suppress HtmlUnknownTag -->
<template>
  <div class="theme-control">
    <SvgIcon v-if="theme === 'light'" name="solid/sun" width="20" height="20" color="orange" @click="onIconClick"/>
    <SvgIcon v-if="theme === 'sepia'" name="solid/mug-hot" width="20" height="20" color="#9A7D0A" @click="onIconClick"/>
    <SvgIcon v-if="theme === 'dark'" name="solid/moon" width="20" height="20" color="silver" @click="onIconClick"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

import { Theme } from './theme';

import SvgIcon from '../SvgIcon.vue';

const components = {
  SvgIcon
};

@Component({components})
export default class ThemeControl extends Vue {
  @Prop({ default: Theme.Light })
  protected theme!: Theme;

  protected themes = [Theme.Light, Theme.Dark, Theme.Sepia];

  get nextTheme() {
    const currentIndex = this.themes.indexOf(this.theme);
    const nextIndex = (currentIndex + 1) % this.themes.length;

    return this.themes[nextIndex]
  }

  protected onIconClick() {
    this.$emit('change', this.nextTheme);
  }
}
</script>

<style lang="scss" scoped>
.theme-control {
  margin-left: 2rem;
}
</style>
