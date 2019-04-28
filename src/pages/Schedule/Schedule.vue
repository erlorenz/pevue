<template>
  <main class="Schedule">
    <PageTitle>Where are we going?</PageTitle>
    <PageInstructions>
      We will pick your garments up after the selected pickup time and return
      them before the selected return time. (All times are in Pacific Time)
    </PageInstructions>
    <form class="schedule-form" @submit.prevent="handleForward">
      <DoubleRadio
        v-model="$v.formData.pickupDate.$model"
        label="Pickup Date"
        :times="pickupDates"
      />
      <RadioGroup
        v-model="$v.formData.pickupHour.$model"
        label="Pickup Time"
        :times="pickupHours"
      />
      <DoubleRadio
        v-model="$v.formData.returnDate.$model"
        label="Return Date"
        :times="returnDates"
      />
      <RadioGroup
        v-model="$v.formData.returnHour.$model"
        label="Return Time"
        :times="returnHours"
      />
      <select
        id="hotel"
        v-model="$v.formData.hotel.$model"
        name="hotel"
        class="select"
      >
        <option
          v-for="hotelName in hotelList"
          :key="hotelName"
          :value="hotelName"
          class="option"
          >{{ hotelName }}</option
        >
      </select>
      <InputGroup
        v-model="$v.formData.room.$model"
        name="room"
        label="Room Number"
        :error="$v.formData.room.$error"
        error-message="Please fill in your room number."
      />
      <!-- <ShowCode>{{ $v }}</ShowCode> -->
      <BottomBar
        :disabled="$v.formData.$invalid"
        @back-clicked="handleBack"
        @next-clicked="handleForward"
      />
    </form>
  </main>
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
import { ADD_SCHEDULE } from '../../store/schedule';
// import ShowCode from '@/components/ShowCode';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Schedule',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    DoubleRadio,
    RadioGroup,
    InputGroup,
    // ShowCode,
  },

  data() {
    return {
      formData: {
        pickupDate: '',
        pickupHour: '',
        returnDate: '',
        returnHour: '',
        hotel: '',
        room: '',
      },
    };
  },

  validations: {
    formData: {
      pickupDate: { required },
      pickupHour: { required },
      returnDate: { required },
      returnHour: { required },
      hotel: { required },
      room: { required },
    },
  },

  computed: {
    pickupDates() {
      return pickupDate();
    },
    pickupHours() {
      return pickupTimes(this.formData.pickupDate);
    },
    returnDates() {
      return returnDate(this.formData.pickupHour);
    },
    returnHours() {
      return returnTimes(this.formData.returnDate, this.formData.pickupHour);
    },
    hotelList() {
      return hotelList.sort();
    },
  },

  methods: {
    handleForward() {
      const payload = this.formData;
      console.log(this.$v);
      if (!this.$v.$invalid) {
        this.$store.commit(ADD_SCHEDULE, payload);
        this.$router.push({ name: 'garments' });
      } else {
        console.log('Cant submit');
      }
    },

    handleBack() {
      alert('Back to landing');
    },
  },
};
</script>

<style lang="scss" scoped>
.Schedule {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
  background-color: $backgroundColor;
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

.ShowCode {
  position: absolute;
  left: 0;
}
</style>
