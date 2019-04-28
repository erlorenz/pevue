<template>
  <div class="DoubleRadioYesNo">
    <label class="label">{{ label }}</label>
    <div class="container">
      <label
        for="leftButton"
        class="radio-label"
        :class="{ selected: value === values[0] }"
        @click="leftClicked"
      >
        <input
          id="leftButton"
          type="radio"
          :checked="value === values[0]"
          :value="values[0]"
          class="hidden"
          @change="leftClicked"
        />
        <RadioButton :selected="value === values[0]" />
        <span class="radio-text">{{ leftText }}</span>
      </label>
      <label
        for="rightButton"
        class="radio-label"
        :class="{ selected: value === values[1] }"
        @click="rightClicked"
      >
        <input
          id="rightButton"
          type="radio"
          :checked="value === values[1]"
          :value="values[1]"
          class="hidden"
          @change="rightClicked"
        />
        <RadioButton :selected="value === values[1]" />
        <span class="radio-text">{{ rightText }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import RadioButton from '@/components/RadioButton';

export default {
  name: 'DoubleRadioYesNo',

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
    label: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
    leftText: {
      type: String,
      required: true,
    },
    rightText: {
      type: String,
      required: true,
    },
  },

  methods: {
    leftClicked() {
      this.$emit('change', this.values[0]);
    },

    rightClicked() {
      this.$emit('change', this.values[1]);
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
