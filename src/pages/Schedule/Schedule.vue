<template>
  <div class="container">
    <PageTitle>Where are we going?</PageTitle>
    <PageInstructions>
      We will pick your garments up after the selected pickup time and return
      them before the selected return time. (All times are in Pacific Time)
    </PageInstructions>
    <form>
      <div></div>
      <div></div>
      <label></label>
      <label></label>
      <div></div>
      <BottomBar :back-clicked="handleBackward" :next-clicked="handleForward" />
    </form>
  </div>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  name: 'Schedule',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
  },

  methods: {
    handleForward() {
      console.log('Forward!');
    },

    handleBackward() {
      console.log('Backward!');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  max-width: 450px;
  font-size: 0.8rem;
}
</style>
