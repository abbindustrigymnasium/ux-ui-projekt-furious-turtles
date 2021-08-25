<template>
  <div class="about">
    <header><navbar /></header>
    <h1 id="h">Members of our team</h1>
    <Staff />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/navbar.vue'
import Staff from '../components/Staff.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Staff
  }
}
</script>



<style>

#h {
  z-index: 100;
  color: white;
}

</style>