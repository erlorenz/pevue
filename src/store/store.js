import Vue from 'vue';
import Vuex from 'vuex';
import garments from './garments';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    garments,
  },
});
