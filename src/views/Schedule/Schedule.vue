<template>
  <div class="container">
    <PageTitle>Where are we going?</PageTitle>
    <PageInstructions>
      We will pick your garments up after the selected pickup time and return
      them before the selected return time. (All times are in Pacific Time)
    </PageInstructions>
  </div>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'Schedule',
  components: {
    PageInstructions,
    PageTitle,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
