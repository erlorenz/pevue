<template>
  <div class="RadioGroup">
    <label class="label">{{ label }}</label>
    <div class="container">
      <label
        v-for="time in times"
        :key="time.valueOf()"
        for="time"
        class="radio-label"
        :class="{ selected: value === time.valueOf().toString() }"
        @click="$emit('change', time.valueOf().toString())"
      >
        <!-- <input
          id="time"
          type="radio"
          :checked="value === "
          :value
          class="hidden"
          @change
        />-->
        <RadioButton :selected="value === time.valueOf().toString()" />
        <span class="radio-text">{{ time.toFormat('t') }}</span>
      </label>
    </div>
  </div>
</template>

<script>
// import { DateTime } from 'luxon';
import RadioButton from '@/components/RadioButton';

export default {
  name: 'RadioGroup',

  components: {
    RadioButton,
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: String,
      required: true,
    },
    times: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      required: true,
    },
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.DoubleRadio {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid $formBorderColor;
  border-radius: 4px;
}

.radio-label {
  background: white;
  border-radius: 4px;
  border: solid 1px transparent;
  position: relative;
  display: flex;
  align-items: center;
  height: $formElementHeight;
  cursor: pointer;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &.selected {
    // border-color: $buttonColor;
    box-shadow: 0 0 4px $buttonColor;
  }
}

.radio-text {
  margin-left: 3rem;
  font-size: $formTextSizeSmall;

  &.big {
    display: none;
  }

  @media (min-width: 350px) {
    &.big {
      display: inline;
    }

    &.small {
      display: none;
    }
  }

  @include desktop-up {
    margin-left: 3.5rem;
    font-size: 0.9rem;
  }
}

.label {
  font-size: $formLabelSize;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.hidden {
  display: none;
}
</style>
