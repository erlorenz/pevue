async function getStripeToken(stripe, card) {
  try {
    if (!stripe) throw new Error('No stripe object');
    const result = await stripe.createToken(card);
    console.log(result.token);
    return result.token;
  } catch (e) {
    console.log(e.message);
  }
}

export default getStripeToken;
