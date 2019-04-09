<template>
  <div class="topbar">
    <div class="logo">
      <img src="@/assets/img/pressexpresslogo.svg" alt="Press Express logo" />
    </div>
    <div class="steps"></div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  components: {},
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.topbar {
  height: 4rem;
  display: flex;
  background-color: white;
  border-bottom: 1px solid rgb(236, 239, 245);
  position: fixed;
  top: 3rem;
  left: 0;
  top: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: 1025px) {
    height: 5rem;
  }
}

.steps {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b5b5;
  width: 200px;
  background-color: blue;
}

.logo {
  position: absolute;
  left: 0;
  width: 190px;
  padding-left: 2rem;
  display: none;

  @media (min-width: 800px) {
    display: block;
  }
}
</style>
