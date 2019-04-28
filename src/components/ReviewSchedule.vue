<template>
  <div class="ReviewSchedule">
    <div class="grid-container">
      <div class="grid-item head">Pickup:</div>
      <div class="grid-item">{{ pickupTime }}</div>
      <div class="grid-item head">Return:</div>
      <div class="grid-item">{{ returnTime }}</div>
      <div class="grid-item head">Hotel:</div>
      <div class="grid-item">6</div>
      <div class="grid-item head">Room:</div>
      <div class="grid-item">8</div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  name: 'ReviewSchedule',

  computed: {
    pickupTime() {
      const stringMillis = this.$store.state.schedule.schedule.pickupHour;
      const dateInPST = DateTime.fromMillis(+stringMillis, {
        zone: 'America/Los_Angeles',
      });
      return (
        dateInPST.toFormat('EEEE, M/d ') +
        'after ' +
        dateInPST.toFormat('t') +
        ' PST'
      );
    },
    returnTime() {
      const stringMillis = this.$store.state.schedule.schedule.returnHour;
      const dateInPST = DateTime.fromMillis(+stringMillis, {
        zone: 'America/Los_Angeles',
      });
      return (
        dateInPST.toFormat('EEEE, M/d ') +
        'by ' +
        dateInPST.toFormat('t') +
        ' PST'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.ReviewSchedule {
  background-color: white;
  padding: 1rem;
  width: 100%;

  @include desktop-up {
    padding: 1.8rem;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(4, max-content);
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  border: 1px solid lightgray;
  border-right-color: transparent;
  border-left-color: transparent;
  padding: 0.5rem;
}

.head {
  font-weight: bold;
}
</style>
