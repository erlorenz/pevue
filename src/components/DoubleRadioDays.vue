<template>
  <div class="DoubleRadioDays">
    <label class="label">{{ label }}</label>
    <div v-if="!rightValue" class="placeholder"></div>
    <div v-if="rightValue" class="container">
      <label
        v-if="leftValue"
        :for="name + 'left'"
        class="radio-label"
        :class="{ selected: value === leftValue }"
      >
        <input
          :id="name + 'left'"
          type="radio"
          :checked="value === leftValue"
          :value="leftValue"
          class="hidden"
          @change="leftClicked"
        />
        <RadioButton :selected="value === leftValue" />
        <span class="radio-text small">
          <span v-if="isToday">Today,</span>
          <span v-if="!isToday">{{ times.val1.toFormat('EEE') }}</span>
          {{ ' ' + times.val1.toFormat('M/d') }}
        </span>
        <span class="radio-text big">
          <span v-if="isToday">Today,</span>
          <span v-if="!isToday">{{ times.val1.toFormat('EEEE') }}</span>
          {{ ' ' + times.val1.toFormat('M/d') }}
        </span>
      </label>
      <label
        :for="name + 'right'"
        class="radio-label"
        :class="{ selected: value === rightValue }"
      >
        <input
          :id="name + 'right'"
          type="radio"
          :checked="value === rightValue"
          :value="rightValue"
          class="hidden"
          @change="rightClicked"
        />
        <RadioButton :selected="value === rightValue" />
        <span class="radio-text big">{{
          times.val2.toFormat('EEEE, M/d')
        }}</span>
        <span class="radio-text small">
          {{ times.val2.toFormat('EEE, M/d') }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';
import RadioButton from '@/components/RadioButton';

export default {
  name: 'DoubleRadioDays',

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
      type: Object,
      default: () => ({}),
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    leftValue() {
      if (this.times && this.times.val1)
        return this.times.val1.valueOf().toString();
      return null;
    },

    rightValue() {
      if (this.times && this.times.val2) {
        return this.times.val2.valueOf().toString();
      }
      return null;
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
  width: 100%;
  position: relative;
}

.container {
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
  cursor: pointer;

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

.label {
  font-size: $formLabelSize;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.placeholder {
  background: white;
  border-radius: 4px;
  border: solid 1px $formBorderColor;
  width: 100%;
  padding: 0.5rem;
}
</style>
