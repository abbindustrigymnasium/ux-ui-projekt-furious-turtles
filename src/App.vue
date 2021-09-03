<template>
  <Navbar />
  <Browser :cakes="cakes" />
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browser from "./components/Browser";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Browser,
  },
  methods: {
    async fetchCakes() {
      const res = await fetch("http://localhost:5000/cakes");
      const data = await res.json();

      return data;
    },
  },
  data() {
    return {
      cakes: [],
      staff: [],
      customers: [],
      orders: [],
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
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #222222;
  margin: 0;
  margin-top: 53px;
  padding: 0;
}
body {
  margin: 0;
}
</style>
