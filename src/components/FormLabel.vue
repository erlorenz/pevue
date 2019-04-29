<template>
  <label :for="id" class="FormLabel">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'FormLabel',

  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.FormLabel {
  font-size: $formLabelSize;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
</style>
