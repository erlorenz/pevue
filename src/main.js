import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faCreditCard,
  faThumbsUp,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Create Icon Library
library.add(faClock, faCreditCard, faThumbsUp, faTshirt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
