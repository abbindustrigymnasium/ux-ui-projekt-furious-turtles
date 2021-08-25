<template>
  <div class="Contact">
    <header><navbar /></header>
    <h1 id="h">This is a contact page</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/navbar.vue'
export default {
  name: 'Contact',
  components: {
    Navbar,
    Footer,
  }
}
</script>



<style>

#h {
  z-index: 100;
  color: chartreuse;
}

</style>