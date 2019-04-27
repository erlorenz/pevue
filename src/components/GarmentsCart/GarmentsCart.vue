<template>
  <div class="GarmentsCart">
    <div v-if="!garments.length" class="empty-cart">
      <p class="empty-text">You haven't selected any items!</p>
    </div>
    <table v-if="garments.length">
      <thead>
        <tr>
          <th class="head">Item</th>
          <th class="hea align-right">Quantity</th>
          <th class="head align-right">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <GarmentsCartItem
          v-for="item in garments"
          :key="item.slug"
          :item="item"
        />
        <tr class="total">
          <td class="cell"></td>
          <td class="align-right cell">Total:</td>
          <td class="align-right flex-between cell">
            <span>$</span>
            {{ totalPrice | formatPrice }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GarmentsCartItem from './GarmentsCartItem';
import formatPrice from '@/utils/formatPrice';

export default {
  name: 'GarmentsCart',

  components: {
    GarmentsCartItem,
  },

  filters: {
    formatPrice,
  },

  computed: {
    garments() {
      return this.$store.state.garments.garments;
    },

    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  border-bottom: 1px solid lightgray;
  padding: 0.3rem;
  text-align: center;
}

.head:nth-child(1) {
  // width: 60%;
}

.head:nth-child(2) {
  width: 20%;
}

.head:nth-child(3) {
  width: 150px;
}

.align-right {
  text-align: right;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  margin-left: 4rem;
}

.cell {
  padding: 0.3rem;
}

.total {
  font-weight: bold;
  border-top: 1px solid lightgray;
}

.empty-cart {
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.empty-text {
  text-align: center;
  background: $backgroundColor;
  padding: 2rem;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
