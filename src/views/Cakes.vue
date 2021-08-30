<template>
<div>
    <header><navbar /></header>
    <div id="mid"></div>
    <Cake />

    <Footer />
</div>
  
</template>

<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/navbar.vue'
import Cake from '../components/Cake.vue'
export default {
    name: 'Cakes',
    components: {
        Footer,
        Navbar,
        Cake
    }
}
</script>


<style>
</style>