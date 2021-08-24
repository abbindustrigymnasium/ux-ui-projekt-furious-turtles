<template>
  <div id="app">
      <header><navbar /></header>
    <div id="mid"></div>
    <Footer></Footer>
    <!-- <router-view/> -->
    </div>

</template>

<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#mid {
  margin-bottom: 600px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
header {
  width: 100w;
  background-color: #222;
  padding: 15px;
  margin-top: -60px;
}


</style>


