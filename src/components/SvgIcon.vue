<template>
  <svgicon :data="icon" v-bind="$attrs" v-on="$listeners"></svgicon>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import SvgIcon from './SvgIcon.vue';

const components = {
  SvgIcon
};

@Component({components})
export default class SvgIcons extends Vue {
  @Prop({ required: true })
  protected name!: string;

  @Prop({ default: false })
  protected local!: boolean;

  protected get icon() {
    if (this.local) {
      return require(`@/assets/images/${this.name}.svg`);
    } else {
      return require(`@fortawesome/fontawesome-free/svgs/${this.name}.svg`);
    }
  }
}
</script>
