<template>
  <div id="app">
    <Topbar />
    <router-view />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar.vue';

export default {
  name: 'App',
  components: {
    Topbar,
  },
};
</script>

<style lang="scss">
// Import all styles to top component

@import '@/styles/index.scss';
</style>
