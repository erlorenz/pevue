<template>
  <div class="InputGroup" :class="{ error: error }">
    <label :for="name" class="label">{{ label }}</label>
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
export default {
  name: 'InputGroup',

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
.label {
  font-size: $formLabelSize;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

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
  }

  .errorMessage {
    display: block;
  }
}
</style>
