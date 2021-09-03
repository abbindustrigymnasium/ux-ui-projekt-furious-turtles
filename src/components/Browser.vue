<template>
  <div class="gridContainer">
    <div class="cakeItem" :key="cake.id" v-for="cake in cakes">
      <Cake :cake="cake" />
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
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>