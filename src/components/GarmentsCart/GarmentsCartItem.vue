<template>
  <tr class="GarmentsCartItem" @click="handleClick">
    <td class="cell">{{ item.description }}</td>
    <td class="cell align-center">{{ item.quantity }}</td>
    <td class="cell flex-between">
      <span class="dollar-sign">$</span>
      {{ subtotal | formatPrice }}
    </td>
  </tr>
</template>

<script>
import formatPrice from '@/utils/formatPrice';
import { REMOVE_GARMENT } from '../../store/garments';

export default {
  name: 'GarmentCartItem',

  filters: {
    formatPrice,
  },

  props: {
    item: {
      type: Object,
      default() {
        return {
          slug: '',
          price: 0,
          description: 0,
          quantity: 0,
        };
      },
    },
  },

  computed: {
    subtotal() {
      return this.item.price * this.item.quantity;
    },
  },

  methods: {
    handleClick() {
      this.$store.commit(REMOVE_GARMENT, this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.align-center {
  text-align: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

.cell {
  padding: 0.3rem;

  @include desktop-up {
    padding: 0.5rem;
  }
}

.GarmentsCartItem {
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:first-child .cell {
    padding-top: 0.8rem;
  }

  &:nth-last-child(2) .cell {
    padding-bottom: 0.8rem;
  }
}
</style>
