<template>
  <main class="Final">
    <PageTitle>Finalize Your Order</PageTitle>
    <PageInstructions>
      Fill out the remaining information and click finish.
      <br />
      When the transaction is completed you'll receive an email receipt and a
      text/SMS update.
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
      <transition name="slide-up" appear>
        <div class="stripe-group">
          <FormLabel>Card Details</FormLabel>
          <div id="stripe-card-element">Stripe Card Element Here</div>
        </div>
      </transition>
    </form>
    <BottomBar
      :disabled="$v.$invalid"
      @back-clicked="handleBack"
      @next-clicked="handleForward"
    />
  </main>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';
import BottomBar from '@/components/BottomBar.vue';
import InputGroup from '@/components/InputGroup';
import FormLabel from '@/components/FormLabel';
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
    FormLabel,
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

  created() {
    console.log(window.Stripe);
  },

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

#stripe-card-element {
  height: $formElementHeight;
  width: 100%;
  border-radius: 4px;
  border: solid 1px $formBorderColor;
  padding: 0 1rem;
  font-size: 1rem;
  color: $textColor;
  background-color: white;

  &:focus {
    outline: none;
    border: 2px solid lightgray;
    box-shadow: 0 0 2px lightgray;
  }
}

.slide-up-enter {
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: transform 0.5s ease-out;
}
</style>
