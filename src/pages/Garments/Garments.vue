<template>
  <div class="container">
    <PageTitle>What are we doing for you?</PageTitle>
    <PageInstructions>
      Click an item to add 1 to your cart. Click the item in the cart to remove
      1.
    </PageInstructions>
    <div class="flex-container">
      <GarmentsList />
      <GarmentsCart />
    </div>
    <BottomBar @back-clicked="handleBackward" @next-clicked="handleForward" />
  </div>
</template>

<script>
import PageInstructions from '@/components/PageInstructions.vue';
import PageTitle from '@/components/PageTitle.vue';
import BottomBar from '@/components/BottomBar.vue';
import GarmentsList from '@/components/GarmentsList/GarmentsList.vue';
import GarmentsCart from '@/components/GarmentsCart/GarmentsCart.vue';

export default {
  name: 'Garments',

  components: {
    PageInstructions,
    PageTitle,
    BottomBar,
    GarmentsList,
    GarmentsCart,
  },

  methods: {
    handleForward() {
      this.$router.push({ name: 'review' });
    },

    handleBackward() {
      this.$router.push({ name: 'schedule' });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1rem 1rem;

  @include desktop-up {
    padding: 2rem 10%;
  }
}

.flex-container {
  display: flex;
  flex-direction: column;
  width: 100%;

  @include desktop-up {
    flex-direction: row;
    align-items: flex-start;
  }
}

.GarmentsList,
.GarmentsCart {
  width: 100%;
  padding: 1rem;
  background: white;
}

.GarmentsList {
  margin-bottom: 1rem;

  @include desktop-up {
    margin-right: 3rem;
    margin-bottom: 0;
  }
}
</style>
