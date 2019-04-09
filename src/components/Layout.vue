<template>
  <main class="layout">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: $backgroundColor;

  @media (min-width: 1025px) {
    padding: 1.8rem;
  }
}
</style>
