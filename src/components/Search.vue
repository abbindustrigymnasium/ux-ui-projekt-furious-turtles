<template>
  <form
    :style="[
      visible
        ? 'transform: translate(-50%, 0);'
        : 'transform: translate(-50%, -100%);',
    ]"
    class="search"
    onsubmit="return false"
  >
    <input
      class="searchField"
      @keyup="updateSearchTerm"
      v-model="searchTerm"
      type="text"
      placeholder="Search Term"
    />
  </form>
</template>

<script>
export default {
  name: "Search",
  methods: {
    updateSearchTerm() {
      this.$emit("updateSearchTerm", this.searchTerm);
    },
  },
  props: {
    visible: Boolean,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
};
</script>

<style scoped>
.searchField {
  font-size: 1.4rem;
}
.search {
  transition: 0.5s;
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0%);
  border: #111111 5px solid;
  border-radius: 0.5rem;
  z-index: 100;
}
</style>