<template>
  <div class="InputGroup">
    <label :for="name" class="label">{{ label }}</label>
    <input
      :id="name"
      class="input"
      :type="type"
      :name="name"
      :value="value"
      @input="handleInput"
    />
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
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
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

.input {
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
</style>
