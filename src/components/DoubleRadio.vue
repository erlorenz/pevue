<template>
  <div class="DoubleRadio">
    <label
      v-if="leftValue"
      for="leftButton"
      class="radio-label"
      :class="{ selected: value === leftValue }"
      @click="leftClicked"
    >
      <input
        id="leftButton"
        type="radio"
        :checked="value === leftValue"
        :value="leftValue"
        class="hidden"
        @change="leftClicked"
      />
      <RadioButton :selected="value === leftValue" />
      <span class="radio-text">
        <span v-if="isToday">Today,</span>
        <span v-if="!isToday">{{ times.val1.toFormat('EEE') }}</span>
        {{ ' ' + times.val1.toFormat('M/d') }}
      </span>
    </label>
    <label
      for="rightButton"
      class="radio-label"
      :class="{ selected: value === rightValue }"
      @click="rightClicked"
    >
      <input
        id="rightButton"
        type="radio"
        :checked="value === rightValue"
        :value="rightValue"
        class="hidden"
        @change="rightClicked"
      />
      <RadioButton :selected="value === rightValue" />
      <span class="radio-text big">{{ times.val2.toFormat('EEEE, M/d') }}</span>
      <span class="radio-text small">
        {{ times.val2.toFormat('EEE, M/d') }}
      </span>
    </label>
  </div>
</template>

<script>
import { pickupDate } from '../utils/customerTimes';
import { DateTime } from 'luxon';
import RadioButton from '@/components/RadioButton';

export default {
  name: 'DoubleRadio',

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
  },

  data() {
    return {
      times: pickupDate(),
    };
  },

  computed: {
    leftValue() {
      if (this.times.val1) return this.times.val1.valueOf().toString();
      return null;
    },

    rightValue() {
      return this.times.val2.valueOf().toString();
    },

    isToday() {
      return this.times.val1.day === DateTime.local().day;
    },
  },

  methods: {
    leftClicked() {
      this.$emit('change', this.leftValue);
    },

    rightClicked() {
      this.$emit('change', this.rightValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.DoubleRadio {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  height: $formElementHeight;
  width: 100%;
}

.radio-label {
  background: white;
  border-radius: 4px;
  border: solid 1px $formBorderColor;
  position: relative;
  display: flex;
  align-items: center;

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

.hidden {
  display: none;
}
</style>
