<template>
    <div id="app">
     <header><navbar/></header>
     <div id="mid-page"></div>
    <Footer></Footer>
    </div>
</template>

<script>
import Footer from './components/Footer';
import navbar from './components/navbar';

export default {
    name: 'App',
    components: {
        Footer,
        navbar
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}

#mid-page {
    margin-bottom: 700px;
}
</style>
