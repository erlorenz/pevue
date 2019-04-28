export const ADD_GARMENT = 'ADD_GARMENT';
export const REMOVE_GARMENT = 'REMOVE_GARMENT';

const garments = {
  state: {
    garments: [],
  },
  getters: {
    totalPrice(state) {
      return state.garments.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0,
      );
    },
    includesShirt(state) {
      return !!state.garments.find(garment => garment.slug === 'shirt');
    },
  },

  mutations: {
    [ADD_GARMENT](state, payload) {
      // Find the index of the matching item, or return -1
      const index = state.garments.findIndex(
        garment => garment.slug === payload.slug,
      );
      // If found increment quantity else push to array
      if (index >= 0) {
        state.garments[index].quantity++;
      } else {
        state.garments.push({ ...payload, quantity: 1 });
      }
    },
    [REMOVE_GARMENT](state, payload) {
      // Find the index of the matching item, or return -1
      const index = state.garments.findIndex(
        garment => garment.slug === payload.slug,
      );
      // If not found do nothing
      if (index === -1) return;

      // If found and quantity is 1 remove, else decrement
      if (state.garments[index].quantity === 1) {
        state.garments.splice(index, 1);
      } else {
        state.garments[index].quantity--;
      }
    },
  },
};

export default garments;
