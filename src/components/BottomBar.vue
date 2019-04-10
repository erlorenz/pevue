<template>
  <div>
    <div class="spacer" />
    <div class="bottom-bar">
      <div class="container">
        <button class="back-button" type="button" onClick="{goBack}">
          <span class="left-arrow">&lt;</span>Back
        </button>
        <button class="forward-button" type="button" onClick="{goNext}">
          Next
          <span class="right-arrow">></span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgb(236, 239, 245);
  z-index: 10;
  font-size: 0.8rem;

  @media (min-width: 1025px) {
    height: 6rem;
  }
}

.spacer {
  height: 5rem;
  width: 100%;
  @media (min-width: 1025px) {
    height: 6rem;
  }
}

.container {
  display: flex;
  width: 80%;
  height: 60%;

  @media (min-width: 500px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: 30%;
  }
}

.forward-button {
  background-color: $buttonColor;
  cursor: pointer;

  &:disabled {
    background-color: #b1ced4;
    cursor: default;
  }

  &:hover {
    background-color: darken($buttonColor, 7%);
  }

  &:active {
    background-color: darken($buttonColor, 7%);
  }
}

.back-button {
  background-color: #e7eced;
  color: #9aa7a9;
  margin-right: 0.3rem;

  &:hover {
    background-color: #0000001a;
  }
}

.left-arrow {
  margin-right: 0.3rem;
}

.right-arrow {
  margin-left: 0.3rem;
}
</style>
