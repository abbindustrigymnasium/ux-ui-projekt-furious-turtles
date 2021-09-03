<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
    <header><navbar /></header>
    <router-view/>
    <Footer id="foot"/>
    </div>

</template>

<script>
import navbar from './components/navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'Home',
  components: {
    navbar,
    Footer
  }
}

  </script>

<style>


body {
  font-family: 'montserrat', sans-serif;
  background-image: url("https://wallpapercave.com/wp/wp2727708.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  
}

header {
  width: 100w;
  background-color: #222;
  padding: 15px;
  margin-top: -60px;
}

#app {
  margin-top:60px;
}

#foot {
  margin-top: 0px;
}


</style>