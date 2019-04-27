<template>
  <tr class="GarmentsListItem" @click="handleClick">
    <td class="cell">{{ item.description }}</td>
    <td class="cell align-right">
      <span class="dollar-sign">$</span>
      {{ item.price | formatPrice }}
    </td>
  </tr>
</template>

<script>
import formatPrice from '@/utils/formatPrice';
import { ADD_GARMENT } from '../../store/garments';

export default {
  name: 'GarmentListItem',

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
        };
      },
    },
  },

  methods: {
    handleClick() {
      this.$store.commit(ADD_GARMENT, this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.align-right {
  display: flex;
  justify-content: space-between;
}

.cell {
  padding: 0.3rem;
}

.GarmentsListItem {
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
}
</style>
