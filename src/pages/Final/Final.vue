<template>
  <main class="Final">
    <PageTitle>Finalize Your Order</PageTitle>
    <PageInstructions>
      Fill out the remaining information and click finish.
      <br />When the transaction is completed you'll receive an email receipt
      and a text/SMS update.
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
          <div id="stripe-card-element" ref="stripecard">
            Stripe Card Element Here
          </div>
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
import getStripeToken from '@/utils/getStripeToken';

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
      stripe: null,
      card: null,
    };
  },

  validations: {
    name: { required, minLength: minLength(2) },
    phone: { required, minLength: minLength(10), maxLength: maxLength(10) },
    email: { required, email },
  },

  mounted() {
    const mountElement = () => {
      const stripe = window.Stripe(process.env.VUE_APP_STRIPE_KEY);
      this.stripe = stripe;
      const elements = stripe.elements();
      const card = elements.create('card');
      this.card = card;
      card.mount(this.$refs.stripecard);
    };

    // Check if stripe exists otherwise mount when loaded
    if (window.Stripe) {
      mountElement();
    } else {
      document.getElementById('stripe-js').addEventListener('load', () => {
        mountElement();
      });
    }
  },

  methods: {
    handleForward() {
      if (!this.$v.$invalid) {
        this.pay();
      } else {
        console.log('No way!');
      }
    },
    handleBack() {
      this.$router.push({ name: 'review' });
    },
    async pay() {
      await getStripeToken(this.stripe, this.card);
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

.StripeElement {
  height: $formElementHeight;
  background-color: white;
  padding: 1rem 0.7rem;
  border: 1px solid $formBorderColor;
  border-radius: 4px;

  &--focus {
    outline: none;
    border: 2px solid lightgray;
    box-shadow: 0 0 2px lightgray;
  }

  &--invalid {
    border-color: $errorColor;
    animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate(0, 0);
    perspective: 1000;
  }
}

.slide-up-enter {
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: transform 0.5s ease-out;
}

@keyframes shake {
  10%,
  90% {
    transform: translateX(-1px);
  }
  20%,
  80% {
    transform: translatX(2px);
  }
  30%,
  50%,
  70% {
    transform: translateX(-4px);
  }
  40%,
  60% {
    transform: translateX(4px);
  }
}
</style>
