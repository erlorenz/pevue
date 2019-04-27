<template>
  <div class="container">
    <PageTitle>Where are we going?</PageTitle>
    <PageInstructions>
      We will pick your garments up after the selected pickup time and return
      them before the selected return time. (All times are in Pacific Time)
    </PageInstructions>
    <form>
      <DoubleRadio v-model="pickupDate" />
      <p>{{ pickupDate }}</p>

      <div></div>
      <label></label>
      <label></label>
      <div></div>
      <BottomBar @back-clicked="handleBackward" @next-clicked="handleForward" />
    </form>
  </div>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';
import BottomBar from '@/components/BottomBar.vue';
import DoubleRadio from '@/components/DoubleRadio.vue';

export default {
  name: 'Schedule',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    DoubleRadio,
  },

  data() {
    return {
      pickupDate: 'HElloooo',
      pickupHour: '',
      returnDate: '',
      returnHour: '',
    };
  },

  methods: {
    leftClicked() {
      console.log('left clicked');
    },

    rightClicked() {
      console.log('right clicked');
    },

    handleForward() {
      this.$router.push({ name: 'garments' });
    },

    handleBackward() {
      alert('Back to landing');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

form {
  max-width: 450px;
  font-size: 0.8rem;
}
</style>
