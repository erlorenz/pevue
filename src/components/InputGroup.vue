<template>
  <div class="InputGroup" :class="{ error: error }">
    <FormLabel :id="name">{{ label }}</FormLabel>
    <textarea
      v-if="textarea"
      :id="name"
      class="text-area"
      :name="name"
      :value="value"
      rows="3"
      @input="handleInput"
    />
    <input
      v-if="!textarea"
      :id="name"
      :type="type"
      class="input"
      :name="name"
      :value="value"
      @input="handleInput"
      @change="handleChange"
    />
    <label class="errorMessage">{{ errorMessage }}</label>
  </div>
</template>

<script>
import FormLabel from '@/components/FormLabel';

export default {
  name: 'InputGroup',

  components: {
    FormLabel,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      validator: prop => ['text', 'email', 'number', 'password'].includes(prop),
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: 'No error message ',
    },
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleChange(e) {
      this.$emit('change', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input,
.text-area {
  height: $formElementHeight;
  width: 100%;
  border-radius: 4px;
  border: solid 1px $formBorderColor;
  padding: 0 1rem;
  font-size: 1rem;
  color: $textColor;

  &:focus {
    outline: none;
    border: 2px solid lightgray;
    box-shadow: 0 0 2px lightgray;
  }
}

.text-area {
  height: auto;
  padding: 1rem;
}

.errorMessage {
  display: none;
  color: $errorColor;
  font-size: $formLabelSize;
  margin-top: 5px;
}

.error {
  .input {
    border-color: $errorColor;
    animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate(0, 0);
    perspective: 1000;
  }

  .errorMessage {
    display: block;
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translateX(-1px);
  }
  20%,
  80% {
    transform: translatX(2px);
  }
  30%,
  50%,
  70% {
    transform: translateX(-4px);
  }
  40%,
  60% {
    transform: translateX(4px);
  }
}
</style>
