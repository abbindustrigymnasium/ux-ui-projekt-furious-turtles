<template>
  <Navbar
    @accountPage="state = 'account'"
    @shopPage="state = 'shop'"
    @featuredPage="state = 'featured'"
    @toggleSearch="toggleSearch"
  />
  <div v-if="state === 'account'">
    <Account :account="account" />
  </div>
  <div v-if="state === 'shop'">
    <Search :visible="searchVisible" @updateSearchTerm="updateSearchTerm" />
    <Browser
      @openInfo="openInfo"
      @addToCart="addToCart"
      :cakes="filteredCake"
    />
    <CakeInfo @closeInfo="this.currentCakeInfo = {}" :cake="currentCakeInfo" />
  </div>
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browser from "./components/Browser";
import CakeInfo from "./components/CakeInfo";
import Search from "./components/Search";
import Account from "./components/Account";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Browser,
    CakeInfo,
    Search,
    Account,
  },
  methods: {
    async fetch(string) {
      const res = await fetch("http://localhost:5000/" + string);
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
    getCookie(c_name) {
      return sessionStorage.getItem(c_name);
    },
    setCookie(c_name, value) {
      return sessionStorage.setItem(c_name, value);
    },
  },
  data() {
    return {
      cakes: [],
      filteredCake: {},
      currentCakeInfo: {},
      searchVisible: false,
      state: "shop",
      account: -1,
    };
  },
  async created() {
    this.cakes = await this.fetch("Cakes");
    this.filteredCake = this.cakes;
    console.log(this.cakes);
    console.log("hey");
    this.account = this.getCookie("userID");
    console.log(this.account);
    console.log(this.account === null);
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
