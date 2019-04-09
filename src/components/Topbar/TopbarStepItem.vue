<template>
  <div class="step-item" :class="{ active: isActive }">
    <span class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span class="text">{{ text }}</span>
    <span v-if="!last" class="arrow">></span>
  </div>
</template>

<script>
export default {
  name: 'TopbarStepItem',

  props: {
    text: {
      type: String,
      default: 'NOPROP',
    },
    icon: {
      type: String,
      default: 'clock',
    },
    last: {
      type: Boolean,
      default: false,
    },
    routePath: {
      type: String,
      default: '',
    },
  },

  computed: {
    isActive() {
      return this.$route.path === this.routePath;
    },
  },
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  align-items: center;

  &.active {
    color: $buttonColor;
  }
}

.icon {
  font-size: 1rem;

  @media (min-width: 1025px) {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
}

.text {
  display: none;
  font-weight: 400;
  font-size: 0.9rem;

  @media (min-width: 1025px) {
    display: block;
  }
}

.arrow {
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 500px) {
    margin-left: 1.3rem;
    margin-right: 1.3rem;
  }
}
</style>
