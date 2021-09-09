<template>
  <div class="navbarContainer">
    <div class="navbar">
      <img src="../../public/razer-ths-logo.svg" alt="razer Logo" width="50" />
      <h3 @click="$emit('shopPage')" class="navitem">Shop</h3>
      <h3 @click="$emit('staffPage')" class="navitem">Staff</h3>
      <i @click="toggleSearch" class="fas fa-search navitem"></i>
      <i
        @click="$emit('checkoutPage')"
        class="fas fa-shopping-cart navitem"
      ></i>
      <i @click="$emit('accountPage')" class="fas fa-user-circle navitem"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleSearch() {
      console.log("toggleSearch");
      this.$emit("toggleSearch");
    },
  },
};
</script>

<style scoped>
.navbarContainer {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 60px;
  background-color: #111111;
  color: #8a8a8a;
  z-index: 1000;
}
.navbar {
  display: flex;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  z-index: 10000;
  justify-content: space-between;
  max-width: 800px;
  margin-top: 0;
  margin-bottom: 5px;
}
.navitem {
  margin-top: auto;
  margin-bottom: auto;
  transition: 0.3s;
}
.navitem:hover {
  color: white;
  transform: scale(1.2);
  cursor: pointer;
}
</style>