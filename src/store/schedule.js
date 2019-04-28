export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const CLEAR_SCHEDULE = 'CLEAR_SCHEDULE';

const schedule = {
  state: {
    schedule: {
      pickupDate: '',
      pickupHour: '',
      returnDate: '',
      returnHour: '',
      hotel: '',
      room: '',
    },
  },

  getters: {},

  mutations: {
    [ADD_SCHEDULE](state, payload) {
      state.schedule = payload;
    },
    [CLEAR_SCHEDULE](state) {
      state.schedule = {
        pickupDate: '',
        pickupHour: '',
        returnDate: '',
        returnHour: '',
        hotel: '',
        room: '',
      };
    },
  },
};

export default schedule;
