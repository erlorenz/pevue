<template>
  <div class="container">
    <PageTitle>Where are we going?</PageTitle>
    <PageInstructions>
      We will pick your garments up after the selected pickup time and return
      them before the selected return time. (All times are in Pacific Time)
    </PageInstructions>
    <form class="schedule-form">
      <DoubleRadio
        v-model="pickupDate"
        label="Pickup Date"
        :times="pickupDates"
      />
      <RadioGroup
        v-model="pickupHour"
        label="Pickup Time"
        :times="pickupHours"
      />
      <DoubleRadio
        v-model="returnDate"
        label="Return Date"
        :times="returnDates"
      />
      <RadioGroup
        v-model="returnHour"
        label="Return Time"
        :times="returnHours"
      />
      <select id="hotel" v-model="hotel" name="hotel" class="select">
        <option
          v-for="hotelName in hotelList"
          :key="hotelName"
          :value="hotelName"
          class="option"
          >{{ hotelName }}</option
        >
      </select>
      <InputGroup v-model="room" name="room" label="Room Number" />
      <BottomBar @back-clicked="handleBackward" @next-clicked="handleForward" />
    </form>
  </div>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';
import BottomBar from '@/components/BottomBar.vue';
import DoubleRadio from '@/components/DoubleRadio.vue';
import {
  pickupDate,
  pickupTimes,
  returnDate,
  returnTimes,
} from '@/utils/customerTimes';
import RadioGroup from '@/components/RadioGroup';
import InputGroup from '@/components/InputGroup';
import hotelList from '@/utils/hotelList.js';

export default {
  name: 'Schedule',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    DoubleRadio,
    RadioGroup,
    InputGroup,
  },

  data() {
    return {
      pickupDate: '',
      pickupHour: '',
      returnDate: '',
      returnHour: '',
      hotel: '',
      room: '',
    };
  },

  computed: {
    pickupDates() {
      return pickupDate();
    },
    pickupHours() {
      return pickupTimes(this.pickupDate);
    },
    returnDates() {
      return returnDate(this.pickupHour);
    },
    returnHours() {
      return returnTimes(this.returnDate, this.pickupHour);
    },
    hotelList() {
      return hotelList.sort();
    },
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
  min-height: 100vh;
}

.schedule-form {
  max-width: 450px;
  font-size: 0.8rem;
  display: grid;
  grid-template-rows: repeat(6, max-content);
  grid-row-gap: 1.5rem;
}

.select {
  height: $formElementHeight;
  width: 100%;
  border-radius: 4px;
  border: solid 1px $formBorderColor;
  padding: 0 1rem;
  font-size: 1rem;
  color: $textColor;

  &:focus {
    border: 2px solid lightgray;
    outline: none;
    box-shadow: 0 0 2px lightgray;
  }
}

.option {
  font-size: 1rem;

  &:focus {
    outline: none;
  }
}
</style>
