<template>
  <div class="RadioButton" :class="{ selected: selected }">
    <div class="outer-circle">
      <div class="animated-circle"></div>
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',

  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.RadioButton {
  position: absolute;
  left: 15px;
  height: 25px;
  width: 25px;

  &.selected {
    & .outer-circle {
      border-color: $buttonColor;
    }

    & .inner-circle {
      opacity: 1;
    }

    & .animated-circle {
      opacity: 0;
      transform: scale(3.5);
      background-color: $buttonColor;
    }
  }
}

.outer-circle {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 3px solid $formBorderColor;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.inner-circle {
  height: 65%;
  width: 65%;
  border-radius: 50%;
  background-color: $buttonColor;
  opacity: 0;
  z-index: 1;
}

.animated-circle {
  height: 65%;
  width: 65%;
  border-radius: 50%;
  // border: 3px solid $formBorderColor;
  background-color: white;
  position: absolute;
  opacity: 1;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
</style>
