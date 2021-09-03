<template>
  <div class="navbarContainer">
    <div class="navbar">
      <img
        class="navitem"
        src="../../public/razer-ths-logo.svg"
        alt="razer Logo"
        width="50"
      />
      <h3 class="navitem">Shop</h3>
      <h3 class="navitem">Featured</h3>
      <i class="fas fa-search navitem"></i>
      <i class="fas fa-shopping-cart navitem"></i>
      <i class="fas fa-user-circle navitem"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbarContainer {
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 6 0px;
  background-color: #111111;
  color: #8a8a8a;
  padding-left: 100px;
  padding-right: 100px;
  z-index: 100000;
}
.navbar {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: auto;
  border: black 2px dotted;
}
.navitem {
  margin-top: auto;
  margin-bottom: auto;
}
</style>