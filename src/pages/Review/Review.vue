<template>
  <main class="Review">
    <PageTitle>Does Everything Look Good?</PageTitle>
    <PageInstructions>
      Review your selected times and garments - you can go back to edit by
      clicking on the times and chosen garments below.
      <br />Also choose any available options and add special instructions.
      <br />Terms and conditions are at the bottom.
    </PageInstructions>
    <router-link :to="{ name: 'schedule' }" class="link">
      <ReviewSchedule />
    </router-link>
    <router-link :to="{ name: 'garments' }" class="link">
      <GarmentsCart />
    </router-link>
    <form class="review-form" @submit.prevent="handleForward">
      <!-- Only include starched option if there is a dress shirt -->
      <DoubleRadio
        v-if="includesShirt"
        v-model="$v.starch.$model"
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
import { ADD_OPTIONS } from '../../store/options';
import { required } from 'vuelidate/lib/validators';
import GarmentsCart from '@/components/GarmentsCart/GarmentsCart';
import ReviewSchedule from '@/components/ReviewSchedule';

export default {
  name: 'Review',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    DoubleRadio,
    InputGroup,
    GarmentsCart,
    ReviewSchedule,
  },

  data() {
    return {
      specialInstructions: '',
      starch: 'light',
    };
  },

  validations: {
    starch: { required },
  },

  computed: {
    includesShirt() {
      return this.$store.getters.includesShirt;
    },
  },

  methods: {
    handleForward() {
      const payload = {
        specialInstructions: this.specialInstructions,
        starch: this.starch,
      };
      this.$store.commit(ADD_OPTIONS, payload);
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

.GarmentsCart {
  pointer-events: none;
}

.link {
  width: 100%;
  max-width: 450px;
  margin-bottom: 1.5rem;
}

.review-form {
  max-width: 450px;
  font-size: 0.8rem;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 1.5rem;
}
</style>
