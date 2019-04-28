<template>
  <div class="layout">
    <router-view />
    <TheTopbar />
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
  background: $backgroundColor;
  padding: 4rem 0;

  @include desktop-up {
    padding: 5rem 0;
  }
}
</style>
