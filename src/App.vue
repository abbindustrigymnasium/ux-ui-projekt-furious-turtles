<template>
  <Navbar />
  <Browser @openInfo="openInfo" @addToCart="addToCart" :cakes="cakes" />
  <CakeInfo @closeInfo="this.currentCakeInfo = {}" :cake="currentCakeInfo" />
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browser from "./components/Browser";
import CakeInfo from "./components/CakeInfo";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Browser,
    CakeInfo,
  },
  methods: {
    async fetchCakes() {
      const res = await fetch("http://localhost:5000/cakes");
      const data = await res.json();

      return data;
    },
    addToCart(id) {
      console.log("Added ID:", id, "to Cart");
    },
    openInfo(id) {
      console.log("Opening Info", id);
      this.currentCakeInfo = this.cakes[id - 1];
      console.log(this.currentCakeInfo);
    },
  },
  data() {
    return {
      cakes: [],
      staff: [],
      customers: [],
      orders: [],
      currentCakeInfo: {},
    };
  },
  async created() {
    this.cakes = await this.fetchCakes();
    console.log(this.cakes);
    console.log("hey");
  },
};
</script>

<style>
body {
  background: #222222;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  margin-top: 70px;
  padding: 0;
}
body {
  margin: 0;
}
</style>
