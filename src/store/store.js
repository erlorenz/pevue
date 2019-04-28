import Vue from 'vue';
import Vuex from 'vuex';
import garments from './garments';
import schedule from './schedule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    garments,
    schedule,
  },
});
