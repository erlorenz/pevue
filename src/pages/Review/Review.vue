<template>
  <main class="Review">
    <PageTitle>Does Everything Look Good?</PageTitle>
    <PageInstructions>
      Review your selected times and garments - you can go back to edit by
      clicking on the times and chosen garments below.
      <br />Also choose any available options and add special instructions.
    </PageInstructions>
    <form class="schedule-form" @submit.prevent="handleForward">
      <!-- Only include starched option if there is a dress shirt -->
      <DoubleRadio
        v-if="includesShirt"
        v-model="$v.starched.$model"
        :values="['light', 'none']"
        left-text="Light"
        right-text="None"
        label="Should we starch your dress shirt(s)?"
      />
      <InputGroup
        v-model="specialInstructions"
        textarea
        name="special-instructions"
        label="Add any special instructions"
      />
      <!-- <ShowCode>{{ $v }}</ShowCode> -->
      <BottomBar
        :disabled="$v.$invalid"
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
import InputGroup from '@/components/InputGroup';
import { ADD_SCHEDULE } from '../../store/schedule';
// import ShowCode from '@/components/ShowCode';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Review',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    DoubleRadio,
    InputGroup,
    // ShowCode,
  },

  data() {
    return {
      specialInstructions: '',
      starched: 'light',
    };
  },

  validations: {
    starched: { required },
  },

  computed: {
    includesShirt() {
      return this.$store.getters.includesShirt;
    },
  },

  methods: {
    handleForward() {
      const payload = this.formData;
      this.$store.commit(ADD_SCHEDULE, payload);
      this.$router.push({ name: 'final' });
    },

    handleBack() {
      this.$router.push({ name: 'garments' });
    },
  },
};
</script>

<style lang="scss" scoped>
.Review {
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
