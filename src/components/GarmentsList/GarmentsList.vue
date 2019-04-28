<template>
  <div class="GarmentsList">
    <table>
      <thead>
        <tr>
          <th class="head">Item</th>
          <th class="align-right head">Price</th>
        </tr>
      </thead>
      <tbody>
        <GarmentsListItem
          v-for="item in priceList"
          :key="item.slug"
          :item="item"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import priceList from './priceList';
import GarmentsListItem from './GarmentsListItem';

export default {
  name: 'GarmentsList',

  components: {
    GarmentsListItem,
  },

  data() {
    return {
      priceList,
    };
  },
};
</script>

<style lang="scss" scoped>
.GarmentsList {
}

.head {
  border-bottom: 1px solid lightgray;
  padding: 0.3rem;

  &:last-child {
    width: 70px;
  }
}

.align-right {
  text-align: right;
}
</style>
