<template>
  <div id="app">
    <TheTopbar />
    <div id="spacer" />
    <TheLayout />
  </div>
</template>

<script>
import TheTopbar from '@/components/TheTopbar/TheTopbar.vue';
import TheLayout from '@/components/TheLayout.vue';

export default {
  name: 'App',
  components: {
    TheTopbar,
    TheLayout,
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
