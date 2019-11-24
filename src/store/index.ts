import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import AppStore, { state, getters, mutations } from './store';

const store = new AppStore({
  state,
  getters,
  mutations
});

store.setupStore();

export default store;
