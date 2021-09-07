<template>
  <Navbar
    @accountPage="state = 'account'"
    @shopPage="state = 'shop'"
    @staffPage="state = 'staff'"
    @checkoutPage="state = 'checkout'"
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
    <CakeInfo
      @addToCart="addToCart"
      @closeInfo="this.currentCakeInfo = {}"
      :cake="currentCakeInfo"
    />
  </div>
  <div v-if="state === 'checkout'">
    <Checkout />
  </div>
  <div v-if="state === staff"></div>
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browser from "./components/Browser";
import CakeInfo from "./components/CakeInfo";
import Search from "./components/Search";
import Account from "./components/Account";
import Checkout from "./components/Checkout";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Browser,
    CakeInfo,
    Search,
    Account,
    Checkout,
  },
  methods: {
    async fetchJson(string) {
      const res = await fetch("http://localhost:5000/" + string);
      const data = await res.json();

      return data;
    },
    async addToCart(id) {
      let userID = sessionStorage.getItem("userID");

      if (!userID) {
        alert("Not logged into an Account");
        return;
      }
      const getRes = await fetch("http://localhost:5000/customers/" + userID);
      const getData = await getRes.json();
      console.log(getData);

      let newCart = [];

      if (getData.cart) {
        newCart = getData.cart;
        if (newCart[id]) {
          newCart[id] += 1;
        } else {
          newCart[id] = 1;
        }
      } else {
        newCart = {};
        newCart[id] = 1;
      }
      const res = await fetch("http://localhost:5000/customers/" + userID, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ cart: newCart }),
      });
      const data = await res.json();
      console.log(data);
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
    this.cakes = await this.fetchJson("Cakes");
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
