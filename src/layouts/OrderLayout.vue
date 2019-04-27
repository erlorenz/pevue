<template>
  <div class="layout">
    <TheTopbar />
    <div class="spacer" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheTopbar from '@/components/TheTopbar/TheTopbar.vue';

export default {
  name: 'OrderLayout',
  components: {
    TheTopbar,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  background-color: $backgroundColor;
  display: grid;
  grid-template-rows: 4rem 1fr;

  @media (min-width: 1025px) {
    grid-template-rows: 5rem 1fr;
  }
}

.spacer {
  background-color: white;
  width: 100%;
  height: 100%;
}
</style>
