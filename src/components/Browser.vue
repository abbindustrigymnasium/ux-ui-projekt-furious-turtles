<template>
  <div class="gridContainer">
    <div class="cakeItem" :key="cake.id" v-for="cake in cakes">
      <Cake
        @openInfo="$emit('openInfo', cake.id)"
        @addToCart="$emit('addToCart', cake.id)"
        :cake="cake"
      />
    </div>
  </div>
</template>

<script>
import Cake from "./Cake";

export default {
  name: "Browser",
  components: {
    Cake,
  },
  props: {
    cakes: Array,
  },
};
</script>

<style>
.gridContainer {
  display: grid;
  grid-row-gap: 7px;
  grid-column-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>