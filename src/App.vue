<template>
  <OrderLayout>
    <router-view />
  </OrderLayout>
</template>

<script>
import OrderLayout from '@/layouts/OrderLayout.vue';

export default {
  name: 'App',
  components: {
    OrderLayout,
  },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
