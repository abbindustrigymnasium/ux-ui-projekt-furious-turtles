<template>
  <Navbar @toggleSearch="toggleSearch" />
  <Search :visible="searchVisible" @updateSearchTerm="updateSearchTerm" />
  <Browser @openInfo="openInfo" @addToCart="addToCart" :cakes="filteredCake" />
  <CakeInfo @closeInfo="this.currentCakeInfo = {}" :cake="currentCakeInfo" />
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browser from "./components/Browser";
import CakeInfo from "./components/CakeInfo";
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Browser,
    CakeInfo,
    Search,
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
    updateSearchTerm(string) {
      console.log(string);
      console.log(this.cakes);
      console.log(this.filteredCake);
      console.log("e");
      this.filteredCake = this.cakes.filter((cake) =>
        cake.title.toLowerCase().includes(string.toLowerCase())
      );
    },
    toggleSearch() {
      this.searchVisible = !this.searchVisible;
      console.log("seachVisible", this.searchVisible);
    },
  },
  data() {
    return {
      cakes: [],
      filteredCake: {},
      staff: [],
      customers: [],
      orders: [],
      currentCakeInfo: {},
      searchVisible: false,
    };
  },
  async created() {
    this.cakes = await this.fetchCakes();
    this.filteredCake = this.cakes;
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
