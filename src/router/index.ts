import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AppRouter from './router';

const router = new AppRouter(process.env.BASE_URL || '/');

export default router;
