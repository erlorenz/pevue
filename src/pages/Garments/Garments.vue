<template>
  <main class="Garments">
    <PageTitle>What are we doing for you?</PageTitle>
    <PageInstructions>
      Click an item to add 1 to your cart. Click the item in the cart to remove
      1.
    </PageInstructions>
    <div class="flex-container">
      <transition name="slide-up" appear>
        <GarmentsList />
      </transition>
      <transition name="slide-up" appear>
        <GarmentsCart />
      </transition>
    </div>
    <BottomBar
      :disabled="!$store.state.garments.garments.length"
      @back-clicked="handleBackward"
      @next-clicked="handleForward"
    />
  </main>
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
.Garments {
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
  font-size: 0.9rem;

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

  @include desktop-up {
    padding: 1.8rem;
  }
}

.GarmentsList {
  margin-bottom: 1rem;

  @include desktop-up {
    margin-right: 3rem;
    margin-bottom: 0;
  }
}

.slide-up-enter {
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: transform 0.5s ease-out;
}
</style>
