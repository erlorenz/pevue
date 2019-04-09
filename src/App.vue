<template>
  <div id="app">
    <Topbar />
    <router-view />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar/Topbar.vue';
export default {
  name: 'App',
  components: {
    Topbar,
  },
};
</script>

<style lang="scss">
// CSS Reset
@import '~sanitize.css';

// Variables
$backgroundColor: '#f7f7f7';
$buttonColor: '#32c8e4';
$primaryColor: '#1D7A8C';
$buttonColorCancel: '#dfdfdf';
$textColor: 'rgb(105; 115; 130)';
$headingColor: 'rgb(9; 11; 23)';
$errorColor: '#ff3860';
$errorBackgroundColor: '#ffedf1';
$borderWidth: '1px';

// Global Styles
body,
ol,
ul {
  font-weight: normal;
  font-family: 'Open Sans', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: $textColor;
}

button,
input,
select,
div,
textarea,
td,
th {
  line-height: 1.5;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

table {
  border-collapse: collapse;
  text-align: left;
  width: 100%;
}

th {
  font-weight: 700;
}

input,
textarea,
select,
button,
label {
  border-radius: 4px;
}

form {
  width: 100%;
}
</style>
