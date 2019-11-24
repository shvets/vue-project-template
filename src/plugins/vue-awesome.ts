import Vue from 'vue';

import Icon from 'vue-awesome/components/Icon';

// import all icons if you don't care about bundle size
import 'vue-awesome/icons';

// globally (in your main .js file)
Vue.component('v-icon', Icon);
