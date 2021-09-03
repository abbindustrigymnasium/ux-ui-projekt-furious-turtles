<template>
  <navbar />
  <div class="spacer"></div>
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
}
.spacer {
  min-height: 500px;
}
</style>
