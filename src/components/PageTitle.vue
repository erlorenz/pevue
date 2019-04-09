<template>
  <h1>
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  color: #3e404d;
  font-weight: 700;

  @media (min-width: 1025px) {
    font-size: 1.9rem;
  }
}
</style>
