export const ADD_OPTIONS = 'ADD_OPTIONS';
export const CLEAR_OPTIONS = 'CLEAR_OPTIONS';

const schedule = {
  state: {
    starch: 'none',
    specialInstructions: '',
  },

  getters: {
    optionsCompleted(state) {
      return !Object.values(state).includes('');
    },
  },

  mutations: {
    [ADD_OPTIONS](state, payload) {
      state.starch = payload.starch;
      state.specialInstructions = payload.specialInstructions;
    },
    [CLEAR_OPTIONS](state) {
      state.starch = 'none';
      state.specialInstructions = '';
    },
  },
};

export default schedule;
