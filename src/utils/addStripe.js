function addStripe() {
  let script = document.createElement('script');
  script.setAttribute('src', 'https://js.stripe.com/v3/');
  document.head.appendChild(script);
}

export default addStripe;
