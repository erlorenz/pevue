<template>
  <div class="layout">
    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
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

.fade-enter-active {
  transition: 0.2s opacity ease;
}

.fade-leave-active {
  transition: 0.2s opacity ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
