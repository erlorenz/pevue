<template>
  <main class="Schedule">
    <PageTitle>Where are we going?</PageTitle>
    <PageInstructions>
      We will pick your garments up after the selected pickup time and return
      them before the selected return time. (All times are in Pacific Time)
    </PageInstructions>
    <form class="schedule-form" @submit.prevent="handleForward">
      <transition name="slide-up" appear>
        <DoubleRadioDays
          v-model="$v.formData.pickupDate.$model"
          label="Pickup Date"
          :times="pickupDates"
          name="pickupdates"
        />
      </transition>
      <transition name="slide-up" appear>
        <RadioGroup
          v-model="$v.formData.pickupHour.$model"
          label="Pickup Time"
          :times="pickupHours"
          name="pickuphours"
        />
      </transition>
      <transition name="slide-up" appear>
        <DoubleRadioDays
          v-model="$v.formData.returnDate.$model"
          label="Return Date"
          :times="returnDates"
          name="returndates"
        />
      </transition>
      <transition name="slide-up" appear>
        <RadioGroup
          v-model="$v.formData.returnHour.$model"
          label="Return Time"
          :times="returnHours"
          name="returnhours"
        />
      </transition>
      <transition name="slide-up" appear>
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
      </transition>
      <transition name="slide-up" appear>
        <InputGroup
          v-model="$v.formData.room.$model"
          name="room"
          label="Room Number"
          :error="$v.formData.room.$error"
          error-message="Please fill in your room number."
        />
      </transition>
    </form>
    <BottomBar
      :disabled="$v.formData.$invalid"
      @back-clicked="handleBack"
      @next-clicked="handleForward"
    />
  </main>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';
import BottomBar from '@/components/BottomBar.vue';
import DoubleRadioDays from '@/components/DoubleRadioDays.vue';
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
    DoubleRadioDays,
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

  mounted() {
    this.formData = this.$store.state.schedule.schedule;
  },

  methods: {
    handleForward() {
      const payload = this.formData;
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

.slide-up-enter {
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: transform 0.5s ease-out;
}
</style>
