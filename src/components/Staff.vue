<template>
  <div id="wrapper">
    <p
      id="p"
      v-for="people in staff"
      :key="people"
    >
    <span id="names">
    {{people.name}}
    </span>
      <img @click="imageClick()" id="staf" v-bind:src="people.avatar" alt="">  
    </p>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  data () {
    return {
      staff: []
    }
  },
  mounted () {
    axios.get("http://localhost:3000/staff")
      .then((result) => {
        this.staff = result.data
        console.log(result)
      })
  },
  methods: {
      imageClick() {
          
      }
  }
}
</script>
 
<style>
body {
    background-image: url("https://wallpapercave.com/wp/wp2727708.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

#wrapper {
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    height: 80vh;

}

#staf {
    width: 200px;
    padding: 0  px;
    border: white solid;

    
    
}

#p {
    color: white;
    font-weight: 900;
    margin: 25px;
}

#names {
    margin: 20px;
}
</style>