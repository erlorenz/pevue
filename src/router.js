import Vue from 'vue';
import Router from 'vue-router';
import Schedule from './views/Schedule/Schedule.vue';

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
      component: Schedule,
    },
    {
      path: '/garments',
      name: 'garments',
      component: () =>
        import(
          /* webpackChunkName: "garments" */ './views/Garments/Garments.vue'
        ),
    },
    {
      path: '/review',
      name: 'review',
      component: () =>
        import(/* webpackChunkName: "review" */ './views/Review/Review.vue'),
    },
    {
      path: '/final',
      name: 'final',
      component: () =>
        import(/* webpackChunkName: "final" */ './views/Final/Final.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () =>
        import(/* webpackChunkName: "success" */ './views/Success/Success.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
    },
  ],
});
