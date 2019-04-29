import Vue from 'vue';
import Vuex from 'vuex';
import garments from './garments';
import schedule from './schedule';
import options from './options';
import localStoragePlugin from './localStoragePlugin';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    garments,
    schedule,
    options,
  },
  plugins: [localStoragePlugin],
});
