import Vue from 'vue';
import Router from 'vue-router';
import Schedule from './pages/Schedule/Schedule.vue';
import OrderLayout from './layouts/OrderLayout.vue';

// Lazy Loaded
const Garments = () =>
  import(/* webpackChunkName: "Garments" */ './pages/Garments/Garments.vue');
const Review = () =>
  import(/* webpackChunkName: "Review" */ './pages/Review/Review.vue');
const Final = () =>
  import(/* webpackChunkName: "Final" */ './pages/Final/Final.vue');
const Success = () =>
  import(/* webpackChunkName: "Success" */ './pages/Success/Success.vue');
const NotFound = () =>
  import(/* webpackChunkName: "NotFound" */ './pages/NotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/schedule',
    },
    {
      path: '/schedule',
      name: 'schedule',
      components: {
        default: Schedule,
        layout: OrderLayout,
      },
    },
    {
      path: '/garments',
      name: 'garments',
      components: {
        default: Garments,
        layout: OrderLayout,
      },
    },
    {
      path: '/review',
      name: 'review',
      components: {
        default: Review,
        layout: OrderLayout,
      },
    },
    {
      path: '/final',
      name: 'final',
      components: {
        default: Final,
        layout: OrderLayout,
      },
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
