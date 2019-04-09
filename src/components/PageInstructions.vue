<template>
  <h2>
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (min-width: 1025px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
