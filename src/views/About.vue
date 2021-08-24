<template>
  <div class="about">
    <header><navbar /></header>
    <h1 id="h">This is an about page</h1>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
  }
}
</script>



<style>

#h {
  z-index: 100;
  color: chartreuse;
}

</style>