<template>
  <main class="Final">
    <PageTitle>Does Everything Look Good?</PageTitle>
    <PageInstructions>
      Review your selected times and garments - you can go back to edit by
      clicking on the times and chosen garments below.
      <br />Also choose any available options and add special instructions.
      <br />Terms and conditions are at the bottom.
    </PageInstructions>

    <form class="final-form" @submit.prevent="handleForward">
      <transition name="slide-up" appear>
        <InputGroup
          v-model.trim="name"
          name="name"
          label="Full Name"
          :error="$v.name.$error"
          error-message="Please enter your first and last name."
          @change="$v.name.$touch"
        />
      </transition>
      <transition name="slide-up" appear>
        <InputGroup
          v-model.trim="email"
          name="email"
          type="email"
          label="Email Address"
          :error="$v.email.$error"
          error-message="Please enter a valid email address so we can send a receipt."
          @change="$v.email.$touch"
        />
      </transition>
      <transition name="slide-up" appear>
        <InputGroup
          v-model="phone"
          name="phone"
          type="number"
          label="10-Digit Phone Number"
          :error="$v.phone.$error"
          error-message="Please enter 10 digit phone number so we can update you via sms."
          @change="$v.phone.$touch"
        />
      </transition>
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
import InputGroup from '@/components/InputGroup';
import {
  required,
  email,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'Final',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    InputGroup,
  },

  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },

  validations: {
    name: { required, minLength: minLength(2) },
    phone: { required, minLength: minLength(10), maxLength: maxLength(10) },
    email: { required, email },
  },

  computed: {},

  methods: {
    handleForward() {
      if (!this.$v.$invalid) {
        console.log('submit');
      } else {
        console.log('No way!');
      }
    },

    handleBack() {
      this.$router.push({ name: 'review' });
    },
  },
};
</script>

<style lang="scss" scoped>
.Final {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100%;
  background-color: $backgroundColor;
}

.final-form {
  width: 100%;
  max-width: 450px;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-row-gap: 1.5rem;
}

.slide-up-enter {
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: transform 0.5s ease-out;
}
</style>
