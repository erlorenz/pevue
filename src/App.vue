<template>
  <div id="app">
    <Topbar />
    <div id="spacer" />
    <Layout />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar.vue';
import Layout from '@/components/Layout.vue';

export default {
  name: 'App',
  components: {
    Topbar,
    Layout,
  },
};
</script>

<style lang="scss">
// Import all styles to top component
@import '@/styles/index.scss';

#app {
  min-height: 100vh;
}

#spacer {
  height: 4rem;

  @media (min-width: 1025px) {
    height: 5rem;
  }
}
</style>
