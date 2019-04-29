import isPastSelectedTime from '@/utils/isPastSelectedTime';
import { CLEAR_SCHEDULE } from './schedule';

function localStoragePlugin(store) {
  // Check if anything was saved to localstorage
  const previousState = JSON.parse(localStorage.getItem('store'));

  // Update state if previous found
  if (previousState) {
    store.replaceState(previousState);

    // If pickup time has passed clear schedule
    if (isPastSelectedTime(previousState.schedule.schedule.pickupHour)) {
      store.commit(CLEAR_SCHEDULE);
    }
  }

  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  });
}

export default localStoragePlugin;
