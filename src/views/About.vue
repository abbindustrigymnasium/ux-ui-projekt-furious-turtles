<template>
  <div class="about">
    <h1 id="h">Members of our team</h1>
    <Staff />
    <div id="mid"></div>
  </div>
</template>

<script>
import Staff from '../components/Staff.vue'
export default {
  name: 'About',
  components: {
    Staff
  }
}
</script>



<style>
#mid{
  margin-bottom: 275px;
}

#h {
  z-index: 100;
  color: white;
  margin-left: 40%;
  margin-bottom: 2%;
}

</style>