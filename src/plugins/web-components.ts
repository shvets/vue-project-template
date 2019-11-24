import Vue from 'vue';

import wrap from '@vue/web-component-wrapper';

import VueWebComponent from '@/components/VueWebComponent.vue';

const customElement = wrap(Vue, VueWebComponent);

window.customElements.define('my-custom-element', customElement);
