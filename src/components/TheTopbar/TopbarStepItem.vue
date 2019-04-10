<template>
  <div class="step-item" :class="{ active: isActive, slide: startAnimation }">
    <!-- <div class="animate" :class="{ active: isActive }"> -->
    <span class="icon" :class="{ active: isActive }">
      <font-awesome-icon :icon="icon" />
    </span>
    <span class="text">{{ text }}</span>
    <!-- </div> -->
    <span v-if="!last" class="arrow">></span>
  </div>
</template>

<script>
export default {
  name: 'TopbarStepItem',

  props: {
    index: {
      type: Number,
      default: 0,
    },
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

  data() {
    return {
      startAnimation: false,
    };
  },

  computed: {
    isActive() {
      return this.$route.path === this.routePath;
    },
  },

  mounted() {
    setTimeout(() => (this.startAnimation = true), this.index * 100);
  },
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  align-items: center;
  color: #cbd3d6;
  transition: color 1s ease, transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(-20px);
  opacity: 0;

  &.active {
    color: $buttonColor;
  }

  &.slide {
    transform: translateY(0);
    opacity: 1;
  }
}

/* .animate {
  display: flex;
  align-items: center;

  &.active {
    animation: active 0.7s forwards;
  }
} */

.icon {
  font-size: 1rem;

  @media (min-width: 1025px) {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }

  &.active {
    animation: active 1.2s forwards;
  }
}

@keyframes active {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.8);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
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
