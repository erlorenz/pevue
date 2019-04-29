function initStripeElement(ref) {
  const stripe = window.Stripe(process.env.VUE_APP_STRIPE_KEY);
  const elements = stripe.elements();

  const style = {
    base: {
      color: '#32325d',
      fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, sans-serif',
      fontSize: '14px',
      '::placeholder': {
        color: '#aab7c4',
      },
      lineHeight: '18px',
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  };

  const card = elements.create('card', { style });

  card.mount(ref);
}

function addStripeElement(ref) {
  console.log(process.env);
  if (window.Stripe) {
    initStripeElement(ref);
  } else {
    const script = document.getElementById('stripe-js');
    script.addEventListener('load', () => {
      initStripeElement(ref);
    });
  }
}

export default addStripeElement;
